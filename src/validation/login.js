const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  //If the field is empty
  let { schoolId, password } = data;

  schoolId = !isEmpty(schoolId) ? schoolId : "";
  password = !isEmpty(password) ? password : "";

  //If the field doesnt met the requirements

  if (Validator.isEmpty(schoolId)) {
    errors.schoolId = "Student ID field is required.";
  }
  if (Validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
