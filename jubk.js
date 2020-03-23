// const express = require("express");
// const mongoose = require("mongoose");

// const router = express.Router();
// const db = require("../models");

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', { useNewUrlParser: true });

// router.get("/", (req, res) => {
//     res.status(200).sendFile("index.html");
// })

// router.get("/workouts", async (req, res) => {
//     let dbRoutine = await db.Workout.find({})
//     res.status(200).send(dbRoutine);
// })

// router.get("/populate/:workoutID", async (req, res) => {
//     let dbRoutine = await db.Workout.find({_id: req.params.workoutID}).populate("exercises")
//     res.status(200).send(dbRoutine);
// })

// router.get("/api/workouts", async (req, res) => {
//     let dbRoutine = await db.Workout.find({}).populate("exercises")
//     res.json(dbRoutine);
// })

// router.post("/submit", async (req, res) => {
//     const newRoutine = new db.Workout(req.body)
//     try {
//         let dbRoutine = await db.Workout.create(newRoutine);
//         res.status(200).send(dbRoutine);
//     } catch (err) {
//         res.status(200).send(err._message);
//     }
// });

// router.post("/add", async (req, res) => {
//     let exerciseInfo = {
//         name: req.body.name,
//         reps: req.body.reps
//     }
//     const newExercise = new db.Exercise(exerciseInfo)
//     try {
//         let addExercise = await db.Exercise.create(newExercise)
//         try {
//             let dbRoutine = await db.Workout.findOneAndUpdate({_id: req.body.workout}, { $push: { exercises: addExercise._id } }, { new: true })
//             res.status(200).send(dbRoutine);
//         } catch (err) {
//             res.status(200).send(err);
//         }
//     } catch (err) {
//         res.status(200).send(err);
//     }
// });

// process.on('uncaughtException', err => {
//     console.log(err);
// })

// module.exports = router;



