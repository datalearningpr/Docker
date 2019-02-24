import time
import os
import redis
import pymongo
from flask import Flask, redirect, url_for, request, render_template

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)

client = pymongo.MongoClient(os.environ['MONGO_URL'])
db = client.tododb


def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)


@app.route('/')
def hello():
    count = get_hit_count()
    return 'Hello World! I have been seen {} times.\n'.format(count)


@app.route('/todo')
def todo():
    _items = db.tododb.find()
    items = [item for item in _items]
    return render_template('todo.html', items=items)


@app.route('/new', methods=['POST'])
def new():
    item_doc = {
        'name': request.form['name'],
        'description': request.form['description']
    }
    db.tododb.insert_one(item_doc)
    return redirect(url_for('todo'))


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)