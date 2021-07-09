const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UtilizatorSchema = new Schema({
  porecla: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefon: {
    type: String,
    default: null,
  },
  parola: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Utilizator", UtilizatorSchema);
