const express = require("express");
const passport = require("passport");
const Student = require("../../models/Student");
const Subject = require("../../models/Subject");
const router = express.Router();

const validateSubjectInput = require("../../validation/subject");

// GET ALL GRADES BY Subject
//api/subject/subjects/:subjectName
router.get("/subjects/:subjectName", (req, res) => {
  const { subjectName } = req.params;
  Subject.find({ subjectName })
    .sort({ date: -1 })
    .populate("student", ["studentId", "firstName", "lastName"])
    .then(subjects => {
      if (!subjects) {
        res.status(404).json({
          message: "There are no currently enrolled to this subject! "
        });
      }
      res.json(subjects);
    })
    .catch(err => res.status(404).json(err));
});

//api/subject/enroll/:id
//Admin will get this route and enroll a student based on the id.
router.post(
  "/enroll/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
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
    } = req.body;
    let { id } = req.params;

    let subjectFields = {};
    subjectFields.student = id;

    const errors = {};

    //This id will store the user id to the db->subject that comes from parameters.

    //Preliminaries
    if (subjectName) subjectFields.subjectName = subjectName;
    if (prelimQuiz1) subjectFields.prelimQuiz1 = prelimQuiz1;
    if (prelimQuiz2) subjectFields.prelimQuiz2 = prelimQuiz2;
    if (prelimQuiz3) subjectFields.prelimQuiz3 = prelimQuiz3;
    if (prelimRecitation1) subjectFields.prelimRecitation1 = prelimRecitation1;
    if (prelimRecitation2) subjectFields.prelimRecitation2 = prelimRecitation2;
    if (prelimRecitation3) subjectFields.prelimRecitation3 = prelimRecitation3;
    if (prelimAssignment1) subjectFields.prelimAssignment1 = prelimAssignment1;
    if (prelimAssignment2) subjectFields.prelimAssignment2 = prelimAssignment2;
    if (prelimProject) subjectFields.prelimProject = prelimProject;
    if (prelimExam) subjectFields.prelimExam = prelimExam;
    //Midterms
    if (midtermQuiz1) subjectFields.midtermQuiz1 = midtermQuiz1;
    if (midtermQuiz2) subjectFields.midtermQuiz2 = midtermQuiz2;
    if (midtermQuiz3) subjectFields.midtermQuiz3 = midtermQuiz3;
    if (midtermRecitation1)
      subjectFields.midtermRecitation1 = midtermRecitation1;
    if (midtermRecitation2)
      subjectFields.midtermRecitation2 = midtermRecitation2;
    if (midtermRecitation3)
      subjectFields.midtermRecitation3 = midtermRecitation3;
    if (midtermAssignment1)
      subjectFields.midtermAssignment1 = midtermAssignment1;
    if (midtermAssignment2)
      subjectFields.midtermAssignment2 = midtermAssignment2;
    if (midtermProject) subjectFields.midtermProject = midtermProject;
    if (midtermExam) subjectFields.midtermExam = midtermExam;
    //Finals
    if (finalsQuiz1) subjectFields.finalGrades.finalsQuiz1 = finalsQuiz1;
    if (finalsQuiz2) subjectFields.finalGrades.finalsQuiz2 = finalsQuiz2;
    if (finalsQuiz3) subjectFields.finalGrades.finalsQuiz3 = finalsQuiz3;
    if (finalsRecitation1)
      subjectFields.finalGrades.finalsRecitation1 = finalsRecitation1;
    if (finalsRecitation2)
      subjectFields.finalGrades.finalsRecitation2 = finalsRecitation2;
    if (finalsRecitation3)
      subjectFields.finalGrades.finalsRecitation3 = finalsRecitation3;
    if (finalsAssignment1)
      subjectFields.finalGrades.finalsAssignment1 = finalsAssignment1;
    if (finalsAssignment2)
      subjectFields.finalGrades.finalsAssignment2 = finalsAssignment2;
    if (finalsProject) subjectFields.finalGrades.finalsProject = finalsProject;
    if (finalsExam) subjectFields.finalGrades.finalsExam = finalsExam;
    //Find a student and save

    new Subject(subjectFields).save().then(subject => {
      res.json(subject);
    });
  }
);

//PUT
//api/subject/grade/:id = subjectId
//Edit the student grades
// PWEDE PA MABAGO TONG ROUTE NA TO BCOS HINDI PA NATIN ALAM KUNG PAANO KUKUNIN SI STUDENT_ID
//Maybe api/subject/grade/:studID/:subjID

router.put(
  "/grade/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id } = req.params;
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
    } = req.body;

    const { errors, isValid } = validateSubjectInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let subjectFields = {};
    //subjectFields.student = id;
    //Preliminaries
    if (subjectName) subjectFields.subjectName = subjectName;
    if (prelimQuiz1) subjectFields.prelimQuiz1 = prelimQuiz1;
    if (prelimQuiz2) subjectFields.prelimQuiz2 = prelimQuiz2;
    if (prelimQuiz3) subjectFields.prelimQuiz3 = prelimQuiz3;
    if (prelimRecitation1) subjectFields.prelimRecitation1 = prelimRecitation1;
    if (prelimRecitation2) subjectFields.prelimRecitation2 = prelimRecitation2;
    if (prelimRecitation3) subjectFields.prelimRecitation3 = prelimRecitation3;
    if (prelimAssignment1) subjectFields.prelimAssignment1 = prelimAssignment1;
    if (prelimAssignment2) subjectFields.prelimAssignment2 = prelimAssignment2;
    if (prelimProject) subjectFields.prelimProject = prelimProject;
    if (prelimExam) subjectFields.prelimExam = prelimExam;

    //Midterms
    if (midtermQuiz1) subjectFields.midtermQuiz1 = midtermQuiz1;
    if (midtermQuiz2) subjectFields.midtermQuiz2 = midtermQuiz2;
    if (midtermQuiz3) subjectFields.midtermQuiz3 = midtermQuiz3;
    if (midtermRecitation1)
      subjectFields.midtermRecitation1 = midtermRecitation1;
    if (midtermRecitation2)
      subjectFields.midtermRecitation2 = midtermRecitation2;
    if (midtermRecitation3)
      subjectFields.midtermRecitation3 = midtermRecitation3;
    if (midtermAssignment1)
      subjectFields.midtermAssignment1 = midtermAssignment1;
    if (midtermAssignment2)
      subjectFields.midtermAssignment2 = midtermAssignment2;
    if (midtermProject) subjectFields.midtermProject = midtermProject;
    if (midtermExam) subjectFields.midtermExam = midtermExam;

    //Finals
    if (finalsQuiz1) subjectFields.finalsQuiz1 = finalsQuiz1;
    if (finalsQuiz2) subjectFields.finalsQuiz2 = finalsQuiz2;
    if (finalsQuiz3) subjectFields.finalsQuiz3 = finalsQuiz3;
    if (finalsRecitation1) subjectFields.finalsRecitation1 = finalsRecitation1;
    if (finalsRecitation2) subjectFields.finalsRecitation2 = finalsRecitation2;
    if (finalsRecitation3) subjectFields.finalsRecitation3 = finalsRecitation3;
    if (finalsAssignment1) subjectFields.finalsAssignment1 = finalsAssignment1;
    if (finalsAssignment2) subjectFields.finalsAssignment2 = finalsAssignment2;
    if (finalsProject) subjectFields.finalsProject = finalsProject;
    if (finalsExam) subjectFields.finalsExam = finalsExam;

    //Find by ID and Update the fields.
    Subject.findById(id)
      .update(subjectFields)
      .then(() => {
        res.status(200).json({ message: "Updated" });
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
);

module.exports = router;
