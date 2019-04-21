const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Student = require("../../models/Student");
const Subject = require("../../models/Subject");
const keys = require("../../config/keys");

//Validations
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Get Routes
router.get(
  "/grades",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.user.id;
    const errors = {};

    Student.find({ id })
      .then(student => {
        if (!student) {
          errors.studentnotfound = "Student not found!";
          res.status(404).json(errors);
        }
        Subject.find({ student: id }).then(subject => {
          if (!subject) {
            errors.nosubject = "No subject found";
            res.status(404).json(errors);
          }
          res.json(subject);
        });
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

/*
Route = api/student/current
Auth
*/
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { id, studentId, firstName, lastName, email } = req.user;
    return res.json({
      id,
      studentId,
      firstName,
      lastName,
      email
    });
  }
);

/*
Route = api/student/
if we go to this route and there is no subject currently attached/enrolled to the student
Auth
*/
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    const student = req.user.id;

    Subject.findOne({ student })
      .then(subject => {
        if (!subject) {
          errors.nosubject =
            "There are no currently enrolled subject to this user";
          return res.status(404).json(errors);
        }
        res.json(subject);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

/* 
Route = api/student/studentId/:studentId
get the student by the studentId
!Auth
*/

router.get("/studentId/:studentId", (req, res) => {
  const errors = {};
  const { studentId } = req.params;
  Student.findOne({ studentId })
    .then(student => {
      if (!student) {
        errors.nostudent =
          "No student are currently enrolled with this Student ID";
        res.status(404).json(errors);
      }
      res.json(student);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

/*
Route = api/student/register
!Auth
*/
router.post("/register", async (req, res) => {
  const { studentId, firstName, lastName, password, email } = req.body;
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const student = await Student.findOne({ studentId });
  if (student) {
    errors.studentId = "Student Already exists";
    return res.status(400).json(errors);
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const newStudent = await new Student({
    studentId,
    firstName,
    lastName,
    email,
    password: hashedPassword
  });
  newStudent.save().then(student => {
    res.json(student);
  });
});

/*
Route = api/student/login
!Auth
*/

router.post("/login", (req, res) => {
  const { studentId, password } = req.body;
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Student.findOne({ studentId })
    .then(student => {
      if (!student) {
        errors.studentId = "Student not found!";
        return res.status(404).json(errors);
      }
      const isMatched = bcrypt.compare(password, student.password);
      if (!isMatched) {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      } else {
        const payload = {
          id: student.id,
          studentId: student.studentId,
          email: student.email
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: "1hr" },
          (err, token) => {
            res.json({
              message: "Success",
              token: "Bearer " + token
            });
          }
        );
      }
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;
