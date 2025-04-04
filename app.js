const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const replicaApp = process.env.APP_NAME || 'base project';

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`requested server : ${replicaApp}`)
});

app.listen(port, () => {
  console.log(`${replicaApp}  listening on port ${port}`);
});
