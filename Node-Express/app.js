const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = fs.readFileSync('helloworld.txt');
  res.send(data.toString());
});

app.listen(port, () => console.log(`App listening on port ${port}!`));