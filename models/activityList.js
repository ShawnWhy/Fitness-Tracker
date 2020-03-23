const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivityListSchema = new Schema({
  list: {
    type: String,
    unique:true
    
  },
  name:{
    type:String,
    unique:true
  }
  
});

const ActivityList = mongoose.model("ActivityList", ActivityListSchema);

module.exports = ActivityList;
