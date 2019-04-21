const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  //If the field is empty
  let { studentId, password } = data;

  studentId = !isEmpty(studentId) ? studentId : "";
  password = !isEmpty(password) ? password : "";

  //If the field doesnt met the requirements

  if (Validator.isEmpty(data.studentId)) {
    errors.studentId = "Student ID field is required.";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
