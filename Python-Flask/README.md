# Python-Flask

```
# build the image
docker build -t python-flask .

# run the container
docker run --rm -it -p 5000:80 --name python-flask-dev python-flask

# run the container with daemon mode
docker run -d -p 5000:80 --name python-flask-dev python-flask

# run the container with mapping local folder to container
docker run --rm -it -p 5000:80 -v {local folder}:/usr/src/app --name python-flask-dev python-flask
```