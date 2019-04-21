const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInpu(data) {
  let errors = {};

  //If the field is empty
  let { studentId, firstName, lastName, email, password, password2 } = data;

  studentId = !isEmpty(studentId) ? studentId : "";
  firstName = !isEmpty(firstName) ? firstName : "";
  lastName = !isEmpty(lastName) ? lastName : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  password2 = !isEmpty(password2) ? password2 : "";

  //If the field doesnt met the requirements

  if (Validator.isEmpty(studentId)) {
    errors.studentId = "Student ID field is required.";
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

  if (!Validator.isLength(studentId, { min: 8, max: 10 })) {
    errors.studentId =
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
