const Validator = require("validator");
const isValue = require("./is-value");
const isEmpty = require("./is-empty");

module.exports = validateSubjectInput = data => {
  let errors = {};
  let {
    subjectName,
    prelimQuiz1,
    prelimQuiz2,
    prelimQuiz3,
    prelimRecitation1,
    prelimRecitation2,
    prelimRecitation3,
    prelimAssignment1,
    prelimAssignment2,
    prelimProject,
    prelimExam,
    midtermQuiz1,
    midtermQuiz2,
    midtermQuiz3,
    midtermRecitation1,
    midtermRecitation2,
    midtermRecitation3,
    midtermAssignment1,
    midtermAssignment2,
    midtermProject,
    midtermExam,
    finalsQuiz1,
    finalsQuiz2,
    finalsQuiz3,
    finalsRecitation1,
    finalsRecitation2,
    finalsRecitation3,
    finalsAssignment1,
    finalsAssignment2,
    finalsProject,
    finalsExam
  } = data;

  subjectName = !isEmpty(subjectName) ? subjectName : "";
  prelimQuiz1 = !isEmpty(prelimQuiz1) ? prelimQuiz1 : 0;
  prelimQuiz2 = !isEmpty(prelimQuiz2) ? prelimQuiz2 : 0;
  prelimQuiz3 = !isEmpty(prelimQuiz3) ? prelimQuiz3 : 0;
  prelimRecitation1 = !isEmpty(prelimRecitation1) ? prelimRecitation1 : 0;
  prelimRecitation2 = !isEmpty(prelimRecitation2) ? prelimRecitation2 : 0;
  prelimRecitation3 = !isEmpty(prelimRecitation3) ? prelimRecitation3 : 0;
  prelimAssignment1 = !isEmpty(prelimAssignment1) ? prelimAssignment1 : 0;
  prelimAssignment2 = !isEmpty(prelimAssignment2) ? prelimAssignment2 : 0;
  prelimProject = !isEmpty(prelimProject) ? prelimProject : 0;
  prelimExam = !isEmpty(prelimExam) ? prelimExam : 0;
  midtermQuiz1 = !isEmpty(midtermQuiz1) ? midtermQuiz1 : 0;
  midtermQuiz2 = !isEmpty(midtermQuiz2) ? midtermQuiz2 : 0;
  midtermQuiz3 = !isEmpty(midtermQuiz3) ? midtermQuiz3 : 0;
  midtermRecitation1 = !isEmpty(midtermRecitation1) ? midtermRecitation1 : 0;
  midtermRecitation2 = !isEmpty(midtermRecitation2) ? midtermRecitation2 : 0;
  midtermRecitation3 = !isEmpty(midtermRecitation3) ? midtermRecitation3 : 0;
  midtermAssignment1 = !isEmpty(midtermAssignment1) ? midtermAssignment1 : 0;
  midtermAssignment2 = !isEmpty(midtermAssignment2) ? midtermAssignment2 : 0;
  midtermProject = !isEmpty(midtermProject) ? midtermProject : 0;
  midtermExam = !isEmpty(midtermExam) ? midtermExam : 0;
  finalsQuiz1 = !isEmpty(finalsQuiz1) ? finalsQuiz1 : 0;
  finalsQuiz2 = !isEmpty(finalsQuiz2) ? finalsQuiz2 : 0;
  finalsQuiz3 = !isEmpty(finalsQuiz3) ? finalsQuiz3 : 0;
  finalsRecitation1 = !isEmpty(finalsRecitation1) ? finalsRecitation1 : 0;
  finalsRecitation2 = !isEmpty(finalsRecitation2) ? finalsRecitation2 : 0;
  finalsRecitation3 = !isEmpty(finalsRecitation3) ? finalsRecitation3 : 0;
  finalsAssignment1 = !isEmpty(finalsAssignment1) ? finalsAssignment1 : 0;
  finalsAssignment2 = !isEmpty(finalsAssignment2) ? finalsAssignment2 : 0;
  finalsProject = !isEmpty(finalsProject) ? finalsProject : 0;
  finalsExam = !isEmpty(finalsExam) ? finalsExam : 0;

  if (isValue(prelimQuiz1)) {
    errors.prelimQuiz1 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimQuiz2)) {
    errors.prelimQuiz2 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimQuiz3)) {
    errors.prelimQuiz3 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimRecitation1)) {
    errors.prelimRecitation1 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimRecitation2)) {
    errors.prelimRecitation2 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimRecitation3)) {
    errors.prelimRecitation3 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimAssignment1)) {
    errors.prelimAssignment1 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimAssignment2)) {
    errors.prelimAssignment2 = "The value of grade should be not more than 100";
  }
  if (isValue(prelimProject)) {
    errors.prelimProject = "The value of grade should be not more than 100";
  }
  if (isValue(prelimExam)) {
    errors.prelimExam = "The value of grade should be not more than 100";
  }
  if (isValue(midtermQuiz1)) {
    errors.midtermQuiz1 = "The value of grade should be not more than 100";
  }
  if (isValue(midtermQuiz2)) {
    errors.midtermQuiz2 = "The value of grade should be not more than 100";
  }
  if (isValue(midtermQuiz3)) {
    errors.midtermQuiz3 = "The value of grade should be not more than 100";
  }
  if (isValue(midtermRecitation1)) {
    errors.midtermRecitation1 =
      "The value of grade should be not more than 100";
  }
  if (isValue(midtermRecitation2)) {
    errors.midtermRecitation2 =
      "The value of grade should be not more than 100";
  }
  if (isValue(midtermRecitation3)) {
    errors.midtermRecitation3 =
      "The value of grade should be not more than 100";
  }
  if (isValue(midtermAssignment1)) {
    errors.midtermAssignment1 =
      "The value of grade should be not more than 100";
  }
  if (isValue(midtermAssignment2)) {
    errors.midtermAssignment2 =
      "The value of grade should be not more than 100";
  }
  if (isValue(midtermProject)) {
    errors.midtermProject = "The value of grade should be not more than 100";
  }
  if (isValue(midtermExam)) {
    errors.midtermExam = "The value of grade should be not more than 100";
  }
  if (isValue(finalsQuiz1)) {
    errors.finalsQuiz1 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsQuiz2)) {
    errors.finalsQuiz2 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsQuiz3)) {
    errors.finalsQuiz3 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsRecitation1)) {
    errors.finalsRecitation1 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsRecitation2)) {
    errors.finalsRecitation2 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsRecitation3)) {
    errors.finalsRecitation3 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsAssignment1)) {
    errors.finalsAssignment1 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsAssignment2)) {
    errors.finalsAssignment2 = "The value of grade should be not more than 100";
  }
  if (isValue(finalsProject)) {
    errors.finalsProject = "The value of grade should be not more than 100";
  }
  if (isValue(finalsExam)) {
    errors.finalsExam = "The value of grade should be not more than 100";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
