const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EnduranceExcSchema = new Schema({
  name: String,
  duration: Number,
  repetition: Number});

const EnduranceExc = mongoose.model("EnduranceExc", EnduranceExcSchema);

module.exports = EnduranceExc;
