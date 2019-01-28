const students = getStudentDetails();

function getStudentDetails() {
  const count = 10;
  let students = [];

  for (let i = 1; i <= count; i++) {
    students.push({
      Id: i,
      Name: `Student ${i}`,
      Address: `HSR Layout sector ${getRandomInt(1, 10)} `,
      FathersName: `Father ${i}`,
      MothersName: `Mother ${i}`,
      Age: getRandomInt(8, 20),
      Standard: getRandomInt(1, 12),
      Location: "Bangalore"
    });
  }

  return students;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.students = students;
