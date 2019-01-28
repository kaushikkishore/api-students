const express = require("express");
const Joi = require("joi");
const { students } = require("./db/db");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(students);
});

app.get("/:id", (req, res) => {
  res.send(students.filter(s => s.Id === parseInt(req.params.id)));
});

app.listen(PORT, console.log(`application is running on PORT ${PORT}`));
