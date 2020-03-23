const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FlexibilityExcSchema = new Schema({
  name: String,
  durartion: Number,
  repetition: Number,
});


const FlexibilityExc = mongoose.model("FlexibilityExc", FlexibilityExcSchema);

module.exports = FlexibilityExc;
