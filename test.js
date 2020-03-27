const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const db = require("./models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesslogger", { useCreateIndex: true,
useNewUrlParser: true,useUnifiedTopology: true});

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/api")(app);

app.use(express.static("public"));
