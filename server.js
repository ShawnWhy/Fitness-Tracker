const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const db = require("./models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesslogger", { useCreateIndex: true,
useNewUrlParser: true,useUnifiedTopology: true,useUnifiedTopology: true},);
// mongoose.set("useFindAndModify",false);

var activityList = {"strength":["push ups","pull ups","dead lift","bench lift"],"endurance":["jogging","cycling","jump roping"],"balance":["foottaps","sit to stand","standing march"],"flexibility":["yoga","stretching","tai-chi"]};
db.ActivityList.findOneAndUpdate({name:"ListToChooseFrom"},{list:JSON.stringify(activityList),name:"ListToChooseFrom"},{new: true, upsert:true})
  .then(dbactivitylists => {
    console.log(dbactivitylists );
  })
  .catch(({message}) => {
    console.log(message);
  });
 
  db.AllLog.create({name:"AllOfLogs"},{new: true, upsert:true})
  .then(dbAllLog=>{
    console.log(dbAllLog);
  })
  .catch(({message}) => {
    console.log(message);
});
  

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/api")(app);

app.use(express.static("public"));





app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


