const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currenciesSchema = new Schema({
  currency: {
    type: [String],
    required: true
  },
  symbol: {
    type: [String],
    required: true
  },
  buying: {
    type: [String],
    required: true
  },
  selling: {
    type: [String],
    required: true
  }

});

module.exports = mongoose.model("Currencies", currenciesSchema);