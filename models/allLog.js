const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AllLogSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  Exc: [
    {
      type: Schema.Types.ObjectId,
      ref: "BalanceExc"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "StrengthExc"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "FlexibilityExc"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "EnduranceExc"
    }
  ],
});
//   StrengtheExc: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "StrengthExc"
//     }
//   ],
//   EnduranceExc: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "EnduranceExc"
//     }
//   ],
//   FlexibilityExc: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "FlexibilityExc"
//     }
//   ]

// });

const AllLog = mongoose.model("AllLog", AllLogSchema);

module.exports = AllLog;
