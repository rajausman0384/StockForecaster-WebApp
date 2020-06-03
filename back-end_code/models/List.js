const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  symbol: {
    type: [String],
    required: true
  },
  sector: {
    type: [String],
    required: true
  },
  listedin: {
    type: [String],
    required: true
  },
  ldcp: {
    type: [String],
    required: true
  },
  open: {
    type: [String],
    required: true
  },
  low: {
    type: [String],
    required: true
  },
  high: {
    type: [String],
    required: true
  },
  current: {
    type: [String],
    required: true
  },
  change: {
    type: [String],
    required: true
  },
  changepercent: {
    type: [String],
    required: true
  },
  volume: {
    type: [String],
    required: true
  }


});

module.exports = mongoose.model("Lists", ListSchema);