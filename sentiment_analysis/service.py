from flask import Flask
from flask import request, jsonify
from analyser import process_posts


app = Flask(__name__)


@app.route('/posts', methods=['POST', 'GET'])
def handle():
    posts = request.get_json() # returns posts in form of dictionary "id": "title", "body", "subred name"
    print("data is " + format(posts))
    labeled_posts = process_posts(posts)
    return jsonify(labeled_posts)


if __name__ == '__main__':
    app.run(port=8081, debug=True, host='0.0.0.0')

