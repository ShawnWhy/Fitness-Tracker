const express = require("express");
const app = express();
const db = require("../models");


module.exports=function(app){

//updates the activity list 
   app.post("/activityListNew",function(req,res){
    var submitlist = req.body.list;
    console.log(submitlist);
    db.ActivityList.updateOne({name:"ListToChooseFrom"},{list:submitlist})
        .then(dbActivities => {
         res.json(dbActivities);
        })
        .catch(err => {
          res.json(err);
        });
    });
//getting the activity lists
  app.get("/activityList",(req,res)=>{
      db.ActivityList.find({})
        .then(dbActivities => {
            res.json(dbActivities);
          })
          .catch(err => {
            res.json(err);
          });
      }); 

//getting all of the logs
app.get("/allLogged", function(req, res){
    db.AllLog.find({})
      .populate("strengthexcs enduranceexcs flexibilityexcs balanceexcs")
      .then(dbAllLog => {
        res.json(dbAllLog);
      })
      .catch(err => {
        res.json(err);
      });
  
    });

  //deletes all of the logs as well as the nested iten numbers in the "alllogs" collection
  app.post("/deleteAll",  function(req,res){
    db.StrengthExc.deleteMany({},
    function(){db.EnduranceExc.deleteMany({},
      function(){db.FlexibilityExc.deleteMany({},
        function(){db.BalanceExc.deleteMany({},
          function(){db.AllLog.updateOne({name:"AllOfLogs"},{balanceexcs:[],
          strengthexcs:[],flexibilityexcs:[],enduranceexcs:[]},
          function(dbdeleteall){
            res.json(dbdeleteall);
          })
        })
      })
    })
  })
  .catch(err => {
      res.json(err);
    });
  });
   

 

app.post("/strengthSubmit", ({body}, res) => {
    db.StrengthExc.create(body)
      .then(({_id}) => db.AllLog.findOneAndUpdate({}, { $push: { strengthexcs: _id } }, { new: true }))
      .then(dbStrengthExc => {
        res.json(dbStrengthExc);
      })
      .catch(err => {
        res.json(err);
      });
    });

  app.post("/enduranceSubmit", ({body}, res) => {
    db.EnduranceExc.create(body)
      .then(({_id}) => db.AllLog.findOneAndUpdate({}, { $push: { enduranceexcs: _id } }, { new: true }))
      .then(dbEnduranceExc => {
        res.json(dbEnduranceExc);
      })
      .catch(err => {
        res.json(err);
      });
    });

  app.post("/FlexibilitySubmit", ({body}, res) => {
    db.FlexibilityExc.create(body)
      .then(({_id}) => db.AllLog.findOneAndUpdate({}, { $push: { flexibilityexcs: _id } }, { new: true }))
      .then(dbFlexibilityExc => {
        res.json(dbFlexibilityExc);
      })
     .catch(err => {
        res.json(err);
      });
    });

  app.post("/balanceSubmit", ({body}, res) => {
    db.BalanceExc.create(body)
      .then(({_id}) => db.AllLog.findOneAndUpdate({}, { $push: { balanceexcs: _id } }, { new: true }))
      .then(dbEndurance => {
        res.json(dbEndurance);
      })
     .catch(err => {
        res.json(err);
      });
  });
  
}
