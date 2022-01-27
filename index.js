const express = require("express");
const app = express();
const mongoose = require("mongoose");

const studentRoute = require("./routes/students");



mongoose.connect(
  "mongodb://localhost:27017/school",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use(express.json());

app.use("/APICALLS/students", studentRoute);


app.listen(5000, () => {
  console.log("backend connection successfull")
})