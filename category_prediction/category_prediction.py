from categorized_data import fetch_categorized_posts
import nltk
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

class CategoryClassifier:

    def __init__(self):
        self.list_of_categories = ["sports", "health", "religion", "politics", "technology", "science", "culture", "travel"]
        self.posts = fetch_categorized_posts()
        self.lemmatizer = WordNetLemmatizer()
        processed = []
        for post in self.posts:
            processed.append(self.process_post(post))

        self.clf = nltk.NaiveBayesClassifier.train(processed)

    def process_post(self, post):
        title, body, category = post
        if body != 'none':
            title += body
        tokens = word_tokenize(title)
        filtered = [self.lemmatizer.lemmatize(token.lower()) for token in tokens if
                    token not in stopwords.words("english")]
        words = dict()
        for word in filtered:
            words[word] = True
        if category in self.list_of_categories:
            num = self.category_to_number(category)
        else:
            num = 0

        return (words, num)

    def classify_post(self, title, body, subreddit):
        processed = self.process_post((title, body, "category"))
        category = self.clf.classify(processed[0])

        return self.number_to_category(category)


    def category_to_number(self, category):
        return self.list_of_categories.index(category) + 1


    def number_to_category(self, number):
        return self.list_of_categories[number - 1]
