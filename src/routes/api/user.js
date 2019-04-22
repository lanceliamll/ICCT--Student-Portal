const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");
const User = require("../../models/User");

/* Get Routes */

//Get all the grades of the specific user based on the request user id
router.get(
  "/grades",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.user.id;
    const errors = {};

    User.find({ id })
      .then(user => {
        if (!user) {
          errors.usernotfound = "user not found!";
          res.status(404).json(errors);
        }
        Subject.find({ user: id }).then(subject => {
          if (!subject) {
            errors.nouser = "No subject found";
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
Route = api/user/
if we go to this route and there is no subject currently attached/enrolled to the student
Auth
*/
// router.get(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const errors = {};
//     const student = req.user.id;

//     Subject.findOne({ student })
//       .then(subject => {
//         if (!subject) {
//           errors.nosubject =
//             "There are no currently enrolled subject to this user";
//           return res.status(404).json(errors);
//         }
//         res.json(subject);
//       })
//       .catch(err => {
//         res.status(404).json(err);
//       });
//   }
// );

/* 
Route = api/student/studentId/:studentId
get the student by the studentId
!Auth
*/

router.get("/schoolId/:schoolId", (req, res) => {
  const errors = {};
  const { schoolId } = req.params;
  User.find({ schoolId })
    .then(user => {
      if (!user) {
        errors.nouser = "No user are currently enrolled with this user ID";
        res.status(404).json(errors);
      }
      res.json(user);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

//Current / Profile
//api/user/current
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { schoolId, firstName, lastName, email } = req.user;
    return res.json({
      schoolId,
      firstName,
      lastName,
      email
    });
  }
);

router.get("/", (req, res) => {
  res.send({ message: "true" });
});

/* Post Routes */

//Login user
//api/user/login

router.post("/login", async (req, res) => {
  const { schoolId, password } = req.body;
  const errors = {};

  const user = await User.findOne({ schoolId });

  if (!user) {
    errors.notexist = "Student doesn't exists";
    res.status(400).json(errors);
  }

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    errors.incorrect = "Incorrect Credentials";
    res.status(400).json(errors);
  }

  const payload = {
    id: user.id,
    schoolId: user.schoolId,
    email: user.email
  };
  await jwt.sign(
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
});

//Register user
//api/user/register
router.post("/register", async (req, res) => {
  const { schoolId, firstName, lastName, email, password, isAdmin } = req.body;
  const errors = {};
  const user = await User.findOne({ schoolId });
  const useradmin = await User.find();

  if (user) {
    res.status(400).json({ message: "Exists" });
  } else {
    if (useradmin.length === 0) {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newAdmin = new User({
        schoolId,
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isAdmin: true
      });
      await newAdmin.save().then(newAdmin => {
        return res.json(newAdmin);
      });
      console.log("nice");
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newStudent = new User({
        schoolId,
        firstName,
        lastName,
        email,
        password: hashedPassword
      });
      await newStudent.save().then(newStudent => {
        return res.json(newStudent);
      });
      console.log("user to");
      console.log("!nice");
    }
  }

  // User.findOne({ schoolId }).then(user => {
  //   if (user) {
  //     res.status(400).json({ message: "Exists" });
  //   } else {
  //     User.find()
  //       .then(user => {
  //         if (user.length === 0) {
  //           const hashedPassword = bcrypt.hash(password, 12);
  //           const newAdmin = new User({
  //             schoolId,
  //             firstName,
  //             lastName,
  //             email,
  //             password: hashedPassword,
  //             isAdmin: true
  //           });
  //           newAdmin.save().then(newAdmin => {
  //             res.json(newAdmin);
  //           });
  //           console.log("nice");
  //         } else {
  //           const hashedPassword = bcrypt.hash(password, 12);
  //           const newStudent = new User({
  //             schoolId,
  //             firstName,
  //             lastName,
  //             email,
  //             password: hashedPassword
  //           });
  //           newStudent.save().then(newStudent => {
  //             res.json(newStudent);
  //           });
  //           console.log("user to");
  //           console.log("!nice");
  //         }
  //       })
  //       .catch(err => {
  //         res.status(400).json(err);
  //       });
  //   }
  // });
});

//Make a user an admin
//api/user/makeadmin/:id
router.put(
  "/makeadmin/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id } = req.params;

    User.findById(id)
      .update({ isAdmin: true })
      .then(() => {
        res.status(200).json({ message: "Updated" });
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
);

//get all students based on the section

/* Put Routes */

/* Delete Routes */
module.exports = router;
