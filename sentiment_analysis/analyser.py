import os
import random
import spacy
from spacy.util import minibatch, compounding
from spacy.lang.en.stop_words import STOP_WORDS
import string
import pandas as pd
import en_core_web_sm
nlp = en_core_web_sm.load()


POSTS_FOR_TEST = {}
LABELED_POSTS = {}

eval_list = []


def train_model(
    training_data: list, test_data: list, iterations: int = 20
) -> None:
    # Build pipeline
    nlp = en_core_web_sm.load()
    if "textcat" not in nlp.pipe_names:
        textcat = nlp.create_pipe(
            "textcat", config={"architecture": "simple_cnn"}
        )
        nlp.add_pipe(textcat, last=True)
    else:
        textcat = nlp.get_pipe("textcat")

    textcat.add_label("pos")
    textcat.add_label("neg")

    # Train only textcat
    training_excluded_pipes = [
        pipe for pipe in nlp.pipe_names if pipe != "textcat"
    ]
    with nlp.disable_pipes(training_excluded_pipes):
        optimizer = nlp.begin_training()
        # Training loop
        print("Beginning training")
        print("Loss\tPrecision\tRecall\tF-score")
        batch_sizes = compounding(
            4.0, 32.0, 1.001
        )  # A generator that yields infinite series of input numbers
        for i in range(iterations):
            print(f"Training iteration {i}")
            loss = {}
            random.shuffle(training_data)
            batches = minibatch(training_data, size=batch_sizes)
            for batch in batches:
                text, labels = zip(*batch)
                nlp.update(text, labels, drop=0.2, sgd=optimizer, losses=loss)
            with textcat.model.use_params(optimizer.averages):
                evaluation_results = evaluate_model(
                    tokenizer=nlp.tokenizer,
                    textcat=textcat,
                    test_data=test_data,
                )
                print(
                    f"{loss['textcat']}\t{evaluation_results['precision']}"
                    f"\t{evaluation_results['recall']}"
                    f"\t{evaluation_results['f-score']}"
                )

    # Save model
    with nlp.use_params(optimizer.averages):
        nlp.to_disk("model_artifacts")


def evaluate_model(tokenizer, textcat, test_data: list) -> dict:
    reviews, labels = zip(*test_data)
    reviews = (tokenizer(review) for review in reviews)
    true_positives = 0
    false_positives = 1e-8  # Can't be 0 because of presence in denominator
    true_negatives = 0
    false_negatives = 1e-8
    for i, review in enumerate(textcat.pipe(reviews)):
        true_label = labels[i]["cats"]
        for predicted_label, score in review.cats.items():
            # Every cats dictionary includes both labels, you can get all
            # the info you need with just the pos label
            if predicted_label == "neg":
                continue
            if score >= 0.5 and true_label["pos"]:
                true_positives += 1
            elif score >= 0.5 and true_label["neg"]:
                false_positives += 1
            elif score < 0.5 and true_label["neg"]:
                true_negatives += 1
            elif score < 0.5 and true_label["pos"]:
                false_negatives += 1
    precision = true_positives / (true_positives + false_positives)
    recall = true_positives / (true_positives + false_negatives)

    if precision + recall == 0:
        f_score = 0
    else:
        f_score = 2 * (precision * recall) / (precision + recall)
    return {"precision": precision, "recall": recall, "f-score": f_score}


def test_model():
    #  Load saved trained model
    loaded_model = spacy.load("model_artifacts")
    print("Testing model")
    for post_id in POSTS_FOR_TEST.keys():
        # Generate prediction
        parsed_text = loaded_model(POSTS_FOR_TEST[post_id])
        print("Parsed: ", parsed_text)
        # Determine prediction to return
        if parsed_text.cats["pos"] > parsed_text.cats["neg"]:
            prediction = "Positive"
            score = parsed_text.cats["pos"]
        else:
            prediction = "Negative"
            score = parsed_text.cats["neg"]
        print(prediction)
        LABELED_POSTS[post_id] = prediction
    print(LABELED_POSTS)
    return LABELED_POSTS
    # print(
    #     f"Review text: {input_data}\nPredicted sentiment: {prediction}"
    #     f"\tScore: {score}"
    # )



def load_training_data(
    data_directory: str = "aclImdb/train", split: float = 0.8, limit: int = 0
) -> tuple:
    # Load from files
    reviews = []
    for label in ["pos", "neg"]:
        labeled_directory = f"{data_directory}/{label}"
        for review in os.listdir(labeled_directory):
            if review.endswith(".txt"):
                with open(f"{labeled_directory}/{review}", encoding="utf8") as f:
                    text = f.read()
                    text = text.replace("<br />", "\n\n")
                    if text.strip():
                        spacy_label = {
                            "cats": {
                                "pos": "pos" == label,
                                "neg": "neg" == label,
                                # giving label according to the directory where file situated
                            }
                        }
                        reviews.append((text, spacy_label))
    random.shuffle(reviews)

    if limit:
        reviews = reviews[:limit]
    split = int(len(reviews) * split)
    return reviews[:split], reviews[split:]


def process_posts(posts):
    # not adding subreddit name
    POSTS_FOR_TEST.clear()
    LABELED_POSTS.clear()
    print(type(posts))
    for post_id in posts.keys():
        post_content = posts[post_id]

        post = ""
        post += post_content['post_title']
        post += " "
        post += post_content['post_body']

        print("Before cleaning: ", post)
        clean_post = dataCleaning(post)
        print("After cleaning: ", clean_post)
        POSTS_FOR_TEST[post_id] = clean_post
    test_model()
    return LABELED_POSTS


def dataCleaning(sentence):
    punct = string.punctuation
    stopwords = list(STOP_WORDS)
    nlp = spacy.load("en_core_web_sm")

    doc = nlp(sentence)
    tokens = []
    for token in doc:
        if token.lemma_ != '-PRON-':
          temp = token.lemma_.lower().strip()
        else:
          temp = token.lower_
        tokens.append(temp)
    clean_tokens = []
    for token in tokens:
        if token not in punct and token not in stopwords:
          clean_tokens.append(token)
    return ' '.join(map(str, clean_tokens))

# if __name__ == "__main__":
    # train, test = load_training_data(limit=2500)
    # print("Training model")
    # train_model(train, test)
    # df = pd.DataFrame(eval_list)
    # pd.DataFrame.plot(df)
    # print("Testing model")
    # for post_id in POSTS_FOR_TEST.keys():
    #     test_model(POSTS_FOR_TEST[post_id], post_id)

