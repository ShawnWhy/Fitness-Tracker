const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EnduranceSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  enduranceexcs: [
    {
      type: Schema.Types.ObjectId,
      ref: "EnduranceExc"
    }
  ]
});

const Endurance = mongoose.model("Endurance", EnduranceSchema);

module.exports = Endurance;
