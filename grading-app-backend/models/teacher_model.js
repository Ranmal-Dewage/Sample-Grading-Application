const mongoose = require("mongoose");

let teacherSchema = mongoose.Schema({
    tid: String,
    Name: String,
    password: String,
    assignments: [{
        aid: String,
        assignmentName: String,
        courseName: String
    }]
});

const Teachers = mongoose.model('Teachers', teacherSchema);

module.exports = Teachers;
