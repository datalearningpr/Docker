const express = require('express')
const fs = require('fs')
const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'mysql',
  user: 'testuser',
  password: '123',
  database: 'testdb',
  port: 3306,
});
connection.connect();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  connection.query('SELECT name, description FROM todo;', function (error, results, fields) {
    if (error) throw error;
    let output = 'name, description <br>';
    for (let i = 0; i < results.length; i++) {
      output += `${results[i].name}, ${results[i].description}` + '<br>';
    }
    if (results.length !== 0)
      res.send(output);
    else
      res.send(results.length.toString());
  });
});

app.get('/size', (req, res) => {
  connection.query('SELECT name, description FROM todo;', function (error, results, fields) {
    if (error) throw error;
    res.send(results.length.toString());
  });
});

// not good pratice to use get the insert data to db
// but easy to test node with mysql with docker 
app.get('/insert/:name/:description', (req, res) => {
  connection.query(`INSERT INTO \`todo\` VALUES ("${req.params.name}", "${req.params.description}")`, error => {
    if (error) throw error;
    res.send(`INSERT INTO \`todo\` VALUES ("${req.params.name}", "${req.params.description}")`);
  });

});

app.listen(port, () => console.log(`App listening on port ${port}!`));