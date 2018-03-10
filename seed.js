const data = require('./seed-data.js');
const mongoose = require('mongoose');
const Animals = require('./db/model.js');
mongoose.connect('mongodb://localhost/animals');
const request = require('request');

var seedDb = function(data) {

  for (var i = 0; i < data.length; i++) {
      {console.log('DATAAAAA', data[i])}
    var saved = {
      id: data[i].id,
      url: data[i].url,
      type: data[i].type,
      height: data[i].height,
      weight: data[i].weight,
      age: data[i].age,
      description: data[i].description
    };

    Animals.insertOne(saved, (err, result) => {
      if (err) {
        console.log('Seed.js says "That ain\'t right..."', err);
      } else {
        console.log('SAVED!', result);
      }
    });
  }
};

seedDb(data);