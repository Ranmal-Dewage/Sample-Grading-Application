const mongoose = require("mongoose");

let assignmentSchema = mongoose.Schema({
    aid: String,
    assignmentName: String,
    courseName: String,
    questions: [String],
    correctAnswers:[String]
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
