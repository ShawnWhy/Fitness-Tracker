const express = require("express");

const app = express();

const db = require("../models");

module.exports=function(app){


  

  app.post("/activityListNew",function(req,res){
    console.log("kskdksd");
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

    app.get("/activityList",(req,res)=>{
      db.ActivityList.find({})
          .then(dbActivities => {
            res.json(dbActivities);
          })
          .catch(err => {
            res.json(err);
          });
      }); 

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

  app.post("/deleteAll",  function(req,res){
    
    db.StrengthExc.deleteMany({},
    function(){db.EnduranceExc.deleteMany({},
      function(){db.FlexibilityExc.deleteMany({},function(){
        db.BalanceExc.deleteMany({},function(){
          db.AllLog.updateOne({name:"AllOfLogs"},{balanceexcs:[],
          strengthexcs:[],flexibilityexcs:[],enduranceexcs:[]},function(dbdeleteall){
            res.json(dbdeleteall);
          }
          )}
       )
       })
    })})
  .catch(err => {
      res.json(err);
    });
  });
    // db.AllLog.strengthexcs.remove()
    // db.AllLog.enduranceexcs.remove()
    // db.AllLog.balanceexcs.remove()
    // db.AllLog.flexibilityexcs.remove()
   

  // this.model('Answers').remove({ Question_Id: this._id }, callback);

 

app.post("/strengthSubmit", ({body}, res) => {
    db.StrengthExc.create(body)
      // .then(({_id}) => db.Strength.findOneAndUpdate({}, { $push: { strengthexcs: _id } }, { new: true }))
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
      // .then(({_id}) => db.Endurance.findOneAndUpdate({}, { $push: { enduranceexcs: _id } }, { new: true }))
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
      // .then(({_id}) => db.Flexibility.findOneAndUpdate({}, { $push: { flexibilityexcs: _id } }, { new: true }))
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
      // .then(({_id}) => db.Balance.findOneAndUpdate({}, { $push: { balanceexcs: _id } }, { new: true }))
      .then(({_id}) => db.AllLog.findOneAndUpdate({}, { $push: { balanceexcs: _id } }, { new: true }))
      .then(dbEndurance => {
        res.json(dbEndurance);
      })
     
      .catch(err => {
        res.json(err);
      });
  });
  
}
  // app.get("/strength", (req, res) => {
  //   db.Book.find({})
  //     .then(dbBook => {
  //       res.json(dbBook);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  
  // app.get("/library", (req, res) => {
  //   db.Library.find({})
  //     .then(dbLibrary => {
  //       res.json(dbLibrary);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  
  // app.get("/allLogged", (req, res) => {
  //   db.Strength.find({})
  //     .populate("strengthexcs")
  //     .then(dbLibrary => {
  //       res.json(dbLibrary);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  //     db.Endurance.find({})
  //     .populate("enduranceexcs")
  //     .then(dbLibrary => {
  //       res.json(dbLibrary);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  //     db.Flexibility.find({})
  //     .populate("flexibilityexcs")
  //     .then(dbLibrary => {
  //       res.json(dbLibrary);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  // module.exports = router;