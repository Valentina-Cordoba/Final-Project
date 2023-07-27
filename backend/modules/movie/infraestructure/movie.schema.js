const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  recommended_age: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
