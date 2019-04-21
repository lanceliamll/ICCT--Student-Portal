const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
  subject: {
    type: [Schema.Types.ObjectId],
    ref: "subjects"
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "admins"
  },
  sectionName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Section = mongoose.model("sections", SectionSchema);
