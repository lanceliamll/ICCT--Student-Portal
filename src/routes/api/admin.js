const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const Admin = require("../../models/Admin");
const Section = require("../../models/Section");
const Student = require("../../models/Student");

router.get("/", (req, res) => {
  res.send({ message: "Test" });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { adminId, firstName, lastName, email } = req.user;
    return res.json({
      adminId,
      firstName,
      lastName,
      email
    });
  }
);

router.post("/registeradmin", async (req, res) => {
  const { adminId, firstName, lastName, email, password } = req.body;

  const admin = await Admin.findOne({ adminId });

  if (admin) {
    res.status(400).json({ message: "admin already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const newAdmin = await new Admin({
    adminId,
    firstName,
    lastName,
    email,
    password: hashedPassword
  });

  newAdmin.save().then(admin => {
    res.json(admin);
  });
});

//api/admin/login
router.post("/loginadmin", (req, res) => {
  const { adminId, password } = req.body;
  Admin.findOne({ adminId })
    .then(admin => {
      if (!admin) {
        errors.adminId = "admin not found!";
        return res.status(404).json(errors);
      }
      const isMatched = bcrypt.compare(password, admin.password);
      if (!isMatched) {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      } else {
        const payload = {
          id: admin.id,
          adminId: admin.adminId,
          email: admin.email
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
