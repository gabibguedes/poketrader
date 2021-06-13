const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  given: {
    type: [{ type: Number }],
    require: [true],
  },
  received: {
    type: [{ type: Number }],
    require: [true],
  },
  expGiven: {
    type: Number,
    require: true
  },
  expReceived: {
    type: Number,
    require: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Trade', tradeSchema);