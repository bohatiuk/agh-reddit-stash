from canary.postgres import _conn
import nltk
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

list_of_categories = ["sports", "health", "religion", "politics", "technology", "science", "culture", "travel"]

def category_to_number(category):
    return list_of_categories.index(category) + 1


def number_to_category(number):
    return list_of_categories[number - 1]


def get_categorized_posts(conn):
    cursor = conn.cursor()
    stmt = f'select * from sp1.classified'
    cursor.execute(stmt)
    posts = cursor.fetchall()
    cursor.close()

    return posts


def get_posts_to_classify(conn):
    cursor = conn.cursor()
    stmt = f'select * from sp1.subreddits'
    cursor.execute(stmt)
    posts = cursor.fetchall()
    cursor.close()

    return posts


def process_post(post):
    lemmatizer = WordNetLemmatizer()
    id, title, body, category = post
    if body != 'none':
        title += body
    tokens = word_tokenize(title)
    filtered = [lemmatizer.lemmatize(token.lower()) for token in tokens if
                token not in stopwords.words("english")]
    words = dict()
    for word in filtered:
        words[word] = True
    if category in list_of_categories:
        num = category_to_number(category)
    else:
        num = 0
    return (words, num)


def build_classification_model(posts):
    processed = []
    for post in posts:
        processed.append(process_post(post))

    clf = nltk.NaiveBayesClassifier.train(processed)

    return clf

def save_in_db(conn, reddit_id, category):
    cursor = conn.cursor()
    stmt = f'insert into sp1.category_prediction (id, reddit_id, category) ' \
           f'values (default, %s, %s)'
    cursor.execute(stmt, (reddit_id, category))
    conn.commit()
    cursor.close()


def classify_posts(posts, clf, conn):
    for post in posts:
        id, reddit_id, title, subreddit, body, num_comments, score, created = post
        processed = process_post((id, title, body, "category"))
        category = clf.classify(processed[0])
        save_in_db(conn, reddit_id, number_to_category(category))



if __name__ == "__main__":
    conn = _conn("../canary/static/postgres.txt")
    categorized = get_categorized_posts(conn)
    clf = build_classification_model(categorized)
    to_classsify = get_posts_to_classify(conn)
    classify_posts(to_classsify, clf, conn)
    conn.close()