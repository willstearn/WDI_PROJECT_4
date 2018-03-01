const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
  bird: { type: mongoose.Schema.ObjectId, ref: 'Bird' },
  image: { type: String },
  location: {}
});

spotSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Spot', spotSchema);
