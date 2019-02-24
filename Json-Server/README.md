# Json-Server

```
# run the container with json file
docker run -d -p 5000:80 -v {local folder}/db.json:/data/db.json clue/json-server

# run the container with js file producing json
docker run -d -p 5000:80 -v {local folder}/file.js:/data/file.js clue/json-server
```