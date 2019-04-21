const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

//Some Imports
const db = require("./src/config/keys").mongoURI;
const student = require("./src/routes/api/student");
const admin = require("./src/routes/api/admin");
const subject = require("./src/routes/api/subject");

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
  });

//Passport Initalization
app.use(passport.initialize());
require("./src/config/passport")(passport);

//Api Routes
app.use("/api/admin", admin);
app.use("/api/student", student);
app.use("/api/subject", subject);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port 5000`);
});
