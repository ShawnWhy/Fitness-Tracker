const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EnduranceSchema = new Schema({
  name: String,
  duration: Number,
  repetition: Number});

const EnduranceExc = mongoose.model("EnduranceExc", EnduranceSchema);

module.exports = EnduranceExc;
