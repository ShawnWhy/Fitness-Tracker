const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AllLogSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  balanceexcs: [
    {
      type: Schema.Types.ObjectId,
      ref: "BalanceExc"
    }],
    strengthexcs:[
    {
      type: Schema.Types.ObjectId,
      ref: "StrengthExc"
    }],
    flexibilityexcs:[
    {
      type: Schema.Types.ObjectId,
      ref: "FlexibilityExc"
    },
    ],
    enduranceexcs:[
    {
      type: Schema.Types.ObjectId,
      ref: "EnduranceExc"
    }
  ]
  
});


const AllLog = mongoose.model("AllLog", AllLogSchema);

module.exports = AllLog;
