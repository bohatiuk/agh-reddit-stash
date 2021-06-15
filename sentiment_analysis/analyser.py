import os
import spacy
from spacytextblob.spacytextblob import SpacyTextBlob

POSTS_FOR_TEST = {}
LABELED_POSTS = {}


def process_posts(posts):
    nlp = spacy.load('en_core_web_sm')
    nlp.add_pipe('spacytextblob')

    POSTS_FOR_TEST.clear()
    LABELED_POSTS.clear()

    for post_id in posts.keys():
        post_content = posts[post_id]

        post = ""
        post += post_content['post_title']
        post += " "
        if post_content['post_body'] != "none":
            post += post_content['post_body']

        POSTS_FOR_TEST[post_id] = post
    sentiment_analysis(nlp)
    return LABELED_POSTS


def sentiment_analysis(nlp):
    for post_id in POSTS_FOR_TEST.keys():
        post = POSTS_FOR_TEST[post_id]
        doc = nlp(post)
        polarity = doc._.polarity

        sentiment = "none"
        if polarity > 0:
            sentiment = "positive"
        elif polarity < 0:
            sentiment = "negative"
        elif polarity == 0:
            sentiment = "neutral"

        LABELED_POSTS[post_id] = sentiment
    return LABELED_POSTS


if __name__ == "__main__":
    posts = {  "id2": {"post_title": "I had a really horrible day. It was the worst day ever!",
               "post_author": "mwdmeyer",
               "post_body": "none",
               "subreddit_name": "pics"}
    }
    process_posts(posts)
