const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BalanceSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  BalanceExc: [
    {
      type: Schema.Types.ObjectId,
      ref: "BalanceExc"
    }
  ]
});

const Balance = mongoose.model("Balance", BalanceSchema);

module.exports = Balance;
