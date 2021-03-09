const mongoose = require("mongoose");

let studentSchema = mongoose.Schema({
    sid: String,
    Name: String,
    password: String,
    assignments: [{
        aid: String,
        assignmentName: String,
        courseName: String,
        studentAnswers: [String],
        questionStatus: [String],
        timeTaken: [Number],
        score: String,
        status: String
    }]
});

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;
