const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  color: [{ type: String }]
});

module.exports = mongoose.model('Bird', birdSchema);
