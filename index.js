const express = require("express");
const app = express();
const mongoose = require("mongoose");

const studentRoute = require("./routes/students");
const subjectRoute = require("./routes/subjects");
const optionalRoute = require("./routes/optionals");
const teacherRoute = require("./routes/teachers");



mongoose.connect(
  "mongodb://localhost:27017/school",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use(express.json());

app.use("/APICALLS/students", studentRoute);
app.use("/APICALLS/subjects", subjectRoute);
app.use("/APICALLS/optionals", optionalRoute);
app.use("/APICALLS/teachers", teacherRoute);


app.listen(5000, () => {
  console.log("backend connection successfull")
})