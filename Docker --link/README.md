# Docker --link

```
# build the image
docker build -t testapp .

# run redis
docker run -d --name redisdb redis

# run the container linked to redis
# command line is not in docker build file, can be used directly in docker run
docker run --rm -it --link redisdb:redis_test testapp python app.py
```