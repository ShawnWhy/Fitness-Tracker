const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FlexibilitySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  FlexibilityExc: [
    {
      type: Schema.Types.ObjectId,
      ref: "FlexibilityExc"
    }
  ]
});

const Flexibility = mongoose.model("Flexibility", FlexibilitySchema);

module.exports = Flexibility;
