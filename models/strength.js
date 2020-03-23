const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StrengthSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  StrengthExc: [
    {
      type: Schema.Types.ObjectId,
      ref: "StrengthExc"
    }
  ]
});

const Strength = mongoose.model("Strength", StrengthSchema);

module.exports = Strength;
