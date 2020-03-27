const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BalanceExcSchema = new Schema({
  name: String,
  repetition: Number,
  duration:Number
});

const BalanceExc = mongoose.model("BalanceExc", BalanceExcSchema);

module.exports = BalanceExc;
