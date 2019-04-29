const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  //If the field is empty
  let { schoolId, firstName, lastName, email, password, password2 } = data;

  schoolId = !isEmpty(schoolId) ? schoolId : "";
  firstName = !isEmpty(firstName) ? firstName : "";
  lastName = !isEmpty(lastName) ? lastName : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  password2 = !isEmpty(password2) ? password2 : "";

  //If the field doesnt met the requirements

  if (Validator.isEmpty(schoolId)) {
    errors.schoolId = "Student ID field is required.";
  }
  if (Validator.isEmpty(firstName)) {
    errors.firstName = "First Name field is required.";
  }
  if (Validator.isEmpty(lastName)) {
    errors.lastName = "Last Name field is required.";
  }
  if (Validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  }
  if (Validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (!Validator.isLength(schoolId, { min: 8, max: 10 })) {
    errors.schoolId =
      "Student ID must be 8 Characters and is Capitalized Properly";
  }

  if (!Validator.isLength(firstName, { min: 2, max: 255 })) {
    errors.firstName = "First name must be atleast 2 Characters";
  }

  if (!Validator.isLength(lastName, { min: 2, max: 255 })) {
    errors.lastName = "Last name must be atleast 2 Characters";
  }

  if (!Validator.isEmail(email)) {
    errors.email = "You should enter a valid email address";
  }

  if (!Validator.isLength(password, { min: 3, max: 30 })) {
    errors.password = "Password must be atleast 3 Characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
