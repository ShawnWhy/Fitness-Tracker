const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivityListSchema = new Schema({
  list:String,
  name:String
});

const ActivityList = mongoose.model("ActivityList", ActivityListSchema);

module.exports = ActivityList;
