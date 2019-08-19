const { Schema, model } = require('mongoose');

const BooShema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  imagePath: { type: String, required: true },
  created_at: { type: String, default: Date.now }
});

module.exports = model('Bokk', BooShema);