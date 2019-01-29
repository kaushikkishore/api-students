const express = require("express");
const Joi = require("joi"); // validation frame
const { students } = require("./db/db");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(students);
});

app.get("/students/:id", (req, res) => {
  res.send(students.filter(s => s.Id === parseInt(req.params.id)));
});

app.get("/students", (req, res) => {
  res.send(students.map(getMinimalStudentDetails));
});

function getMinimalStudentDetails(student, index) {
  return { Id: student.Id, Name: student.Name };
}

app.listen(PORT, console.log(`application is running on PORT ${PORT}`));
