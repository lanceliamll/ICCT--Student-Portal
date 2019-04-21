const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  subjectName: {
    type: String
  },
  prelimQuiz1: { type: Number, default: 0 },
  prelimQuiz2: { type: Number, default: 0 },
  prelimTotalQuiz: { type: Number, default: 0 },

  midtermQuiz1: { type: Number, default: 0 },
  midtermQuiz2: { type: Number, default: 0 },
  midtermTotalQuiz: { type: Number, default: 0 },

  finalsQuiz1: { type: Number, default: 0 },
  finalsQuiz2: { type: Number, default: 0 },
  finalsTotalQuiz: { type: Number, default: 0 },
  overall: { type: Number, default: 0 }
});

TestSchema.pre("save", function(next) {
  this.prelimTotalQuiz = parseInt(this.prelimQuiz1 + this.prelimQuiz2) / 2;
  this.midtermTotalQuiz = parseInt(this.midtermQuiz1 + this.midtermQuiz2) / 2;
  this.finalsTotalQuiz = parseInt(this.finalsQuiz1 + this.finalsQuiz2) / 2;
  this.overall =
    parseInt(
      this.prelimTotalQuiz + this.midtermTotalQuiz + this.finalsTotalQuiz
    ) / 3;

  next();
});

module.exports = Test = mongoose.model("tests", TestSchema);
