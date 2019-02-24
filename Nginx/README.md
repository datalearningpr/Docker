# Nginx

```
# build the image
docker build -t nginx-vue .

# run the container
docker run --rm -it -p 5000:80 --name nginx-vue-dev nginx-vue

# run the container with daemon mode
docker run -d -p 5000:80 --name nginx-vue-dev nginx-vue

# run the container with mapping local folder to container
docker run --rm -it -p 5000:80 -v {local folder}:/usr/share/nginx/html --name nginx-vue-dev nginx:alpine

# more complex with the config files
docker run \
  -d -p 5000:80 \
  -v /mongo/dist:/usr/share/nginx/html \
  -v /mongo/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v /mongo/conf.d:/etc/nginx/conf.d \
  --name nginxvue-dev \
  nginx:alpine
```