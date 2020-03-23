const express = require("express");
const router = require("express").Router();

const app = express();

const db = require("../models");

module.exports=function(app){

app.get("/activityList",(req,res)=>{
  db.ActivityList.find({})
      .then(dbActivities => {
        res.json(dbActivities);
      })
      .catch(err => {
        res.json(err);
      });
  });



app.post("/strengthSubmit", ({body}, res) => {
    db.StrengthExc.create(body)
      .then(({_id}) => db.Strength.findOneAndUpdate({}, { $push: { strengthexcs: _id } }, { new: true }))
      .then(dbStrength => {
        res.json(dbStrength);
      })
      .then(({_id}) => db.All.findOneAndUpdate({}, { $push: { strengthexcs: _id } }, { new: true }))
      .then(dbStrength => {
        res.json(dbStrength);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.post("/enduranceSubmit", ({body}, res) => {
    db.EnduranceExc.create(body)
      .then(({_id}) => db.Endurance.findOneAndUpdate({}, { $push: { enduranceexcs: _id } }, { new: true }))
      .then(dbEndurance => {
        res.json(dbEndurance);
      })
      .then(({_id}) => db.AllLog.findOneAndUpdate({}, { $push: { enduranceexcs: _id } }, { new: true }))
      .then(dbEndurance => {
        res.json(dbEndurance);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.post("/FlexibilitySubmit", ({body}, res) => {
    db.FlexibilityExc.create(body)
      .then(({_id}) => db.Flexibility.findOneAndUpdate({}, { $push: { flexibilityexcs: _id } }, { new: true }))
      .then(dbEndurance => {
        res.json(dbEndurance);
      })
      .then(({_id}) => db.AllLog.findOneAndUpdate({}, { $push: { flexibilityexcs: _id } }, { new: true }))
      .then(dbEndurance => {
        res.json(dbEndurance);
      })
     
      .catch(err => {
        res.json(err);
      });
  });
  app.post("/balanceSubmit", ({body}, res) => {
    db.BalanceExc.create(body)
      .then(({_id}) => db.Balance.findOneAndUpdate({}, { $push: { balanceexcs: _id } }, { new: true }))
      .then(dbEndurance => {
        res.json(dbEndurance);
      })
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