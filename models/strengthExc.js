const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const strengthExcSchema = new Schema({
  name: String,
  repetition: Number,
  duration: Number,
});

const StrengthExc = mongoose.model("StrengthExc", strengthExcSchema);

module.exports = StrengthExc;
