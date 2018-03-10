const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3100;

const db = require('../db/model.js');

mongoose.connect('mongodb://localhost/animals');

app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/animals', (req, res) => {
  db.findAll((err, results) => {
    if (err) {
      console.log('story err', err);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
