import pickle
import nltk
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
dler = nltk.downloader.Downloader()
dler._update_index()
dler.download('punkt')
dler.download('stopwords')
dler.download('wordnet')

class CategoryClassifier:

    def __init__(self):
        self.list_of_categories = ["sports", "health", "religion", "politics", "technology", "science", "culture", "travel", "food"]
        self.lemmatizer = WordNetLemmatizer()
        file = open("classifier", "rb")
        self.clf = pickle.load(file)

    def process_post(self, post):
        title, body, category = post
        if body != 'none':
            title += " "
            title += body
        tokens = word_tokenize(title)
        filtered = [self.lemmatizer.lemmatize(token.lower()) for token in tokens if
                    token not in stopwords.words("english") and token.isalnum()]
        words = dict()
        for word in filtered:
            words[word] = True
        if category in self.list_of_categories:
            num = self.category_to_number(category)
        else:
            num = 0

        return (words, num)

    def classify_post(self, title, body, subreddit):
        if subreddit.lower() in self.list_of_categories:
            return subreddit.lower()
        processed = self.process_post((title, body, "category"))
        dist = self.clf.prob_classify(processed[0])
        if dist.prob(dist.max()) < 0.5:
            return "other"
        else:
            return self.number_to_category(dist.max())


    def category_to_number(self, category):
        return self.list_of_categories.index(category) + 1


    def number_to_category(self, number):
        return self.list_of_categories[number - 1]
