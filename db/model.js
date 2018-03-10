const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animals');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('Database HELLA connected');
})

const animalSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  url: String,
  type: String,
  height: String,
  weight: String,
  age: String,
  description: String
});

const AnimalModel = mongoose.model('Animal', animalSchema);

function findAll (callback) {
  AnimalModel.find({}).sort('+id').exec(callback);
}

function insertOne (story, callback) {
  AnimalModel.create(story, callback);
}

exports.findAll = findAll;
exports.insertOne = insertOne;
