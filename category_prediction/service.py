from flask import Flask
from flask import request, jsonify
from category_prediction import CategoryClassifier


app = Flask(__name__)
classifier = CategoryClassifier()

@app.route('/posts', methods=['POST', 'GET'])
def handle():
    title = request.args.get("title")
    body = request.args.get("body")
    subreddit = request.args.get("subreddit")
    return jsonify({"category": classifier.classify_post(title, body, subreddit)})


if __name__ == '__main__':
    app.run(port=8082, debug=True, host='0.0.0.0')

