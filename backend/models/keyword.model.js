const mongoose = require('mongoose');

const keywordSchema = new mongoose.Schema({
  keyword: {
    type: String,
    trim: true
  },
  articleNumber: {
    type: Number
  }
});

module.exports = mongoose.model('Keyword', keywordSchema);