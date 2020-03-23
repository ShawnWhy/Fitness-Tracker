
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesslogger", { useCreateIndex: true,
useNewUrlParser: true,useUnifiedTopology: true});

var activityList = {"strength":["push ups","pull ups","dead lift","bench lift"],"endurance":["jogging","cycling","jump roping"],"balance":["foottaps","sit to stand","standing march"],"flexibility":["yoga","stretching","tai-chi"]};
db.ActivityList.create({ list:JSON.stringify(activityList) },{name:"ListToChooseFrom"})
  .then(dbactivities => {
    console.log(dbactivities);
  })
  .catch(({message}) => {
    console.log(message);
  });


db.Strength.create({ name: "Strength" })
  .then(dbStrength => {
    console.log(dbStrength);
  })
  .catch(({message}) => {
    console.log(message);
  });
  db.Endurance.create({ name: "Endurance" })
  .then(dbEndurance => {
    console.log(dbEndurance);
  })
  .catch(({message}) => {
    console.log(message);
  });
  db.Balance.create({ name: "Balance" })
  .then(dbBalance => {
    console.log(dbBalance);
  })
  .catch(({message}) => {
    console.log(message);
  });

  db.Flexibility.create({ name: "Flexibility" })
  .then(dbFlexibility => {
    console.log(dbFlexibility);
  })
  .catch(({message}) => {
    console.log(message);
  });

  db.AllLog.create({name:"AllOfLogs"})
  .then(dbAllLog=>{
    console.log(dbAllLog);
  })
  .catch(({message}) => {
    console.log(message);
});
  