const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "students"
  },
  subjectName: {
    type: String,
    required: true
  },
  prelimQuiz1: { type: Number, default: 0 },
  prelimQuiz2: { type: Number, default: 0 },
  prelimQuiz3: { type: Number, default: 0 },
  prelimRecitation1: { type: Number, default: 0 },
  prelimRecitation2: { type: Number, default: 0 },
  prelimRecitation3: { type: Number, default: 0 },
  prelimAssignment1: { type: Number, default: 0 },
  prelimAssignment2: { type: Number, default: 0 },
  prelimProject: { type: Number, default: 0 },
  prelimClassStanding: { type: Number, default: 0 },
  prelimExam: { type: Number, default: 0 },
  midtermQuiz1: { type: Number, default: 0 },
  midtermQuiz2: { type: Number, default: 0 },
  midtermQuiz3: { type: Number, default: 0 },
  midtermRecitation1: { type: Number, default: 0 },
  midtermRecitation2: { type: Number, default: 0 },
  midtermRecitation3: { type: Number, default: 0 },
  totalMidtermRecitation: { type: Number, default: 0 },
  midtermAssignment1: { type: Number, default: 0 },
  midtermAssignment2: { type: Number, default: 0 },
  midtermProject: { type: Number, default: 0 },
  midtermExam: { type: Number, default: 0 },
  finalsQuiz1: { type: Number, default: 0 },
  finalsQuiz2: { type: Number, default: 0 },
  finalsQuiz3: { type: Number, default: 0 },
  finalsRecitation1: { type: Number, default: 0 },
  finalsRecitation2: { type: Number, default: 0 },
  finalsRecitation3: { type: Number, default: 0 },
  finalsAssignment1: { type: Number, default: 0 },
  finalsAssignment2: { type: Number, default: 0 },
  finalsProject: { type: Number, default: 0 },
  finalsExam: { type: Number, default: 0 },

  overallGrade: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Subject = mongoose.model("subjects", SubjectSchema);
