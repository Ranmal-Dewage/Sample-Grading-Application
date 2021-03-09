const Assignments = require("./models/assignment_model");
const Students = require("./models/student_model");
const Teaacher = require("./models/teacher_model");

// db initialization of Assignment details
const initializeAssignment = () => {
    let assignment_1 = {
        aid: "GEO_001",
        assignmentName: "Name the Capitals",
        courseName: "Geography",
        questions: ["Name the Capital of India ?", "Name the Capital of Australia ?", "Name the Capital of UK ?",
            "Name the Capital of USA ?", "Name the Capital of Canada ?"],
        correctAnswers: ["New Delhi", "Canberra", "London", "Washington DC", "Torronto"]
    }

    let assignment_2 = {
        aid: "HIS_001",
        assignmentName: "Name the Historical Events",
        courseName: "History",
        questions: ["1st President of Sri Lanka ?", "1st Female Priminster in UK ?", "Most Ancient Civilization ?",
            "When did World War 1 started ?", "When did World War 2 started ?"],
        correctAnswers: ["J.R.Jayewardene", "Margaret Thatcher", "Sumerian", "1914", "1939"]
    }

    let assignment_3 = {
        aid: "MAT_001",
        assignmentName: "Calculate the Values",
        courseName: "Mathematics",
        questions: ["What is log(1) ?", "What is 10 Mod 3 ?", "What is 6 ^ 4 ?", "What is Factorial of 6  ?", "What is 12 * 11 ?"],
        correctAnswers: ["0", "1", "1296", "720", "132"]
    }

    let ass_1 = new Assignments(assignment_1);
    ass_1.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Assignment insertion Successful");;
        }
    });

    let ass_2 = new Assignments(assignment_2);
    ass_2.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Assignment insertion Successful");;
        }
    });

    let ass_3 = new Assignments(assignment_3);
    ass_3.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Assignment insertion Successful");;
        }
    });

}

// db initialization of Student details
const initializeStudents = () => {
    let student_1 = {
        sid: "ST_001",
        Name: "Ranmal Dewage",
        password: 1234,
        assignments: [{
            aid: "HIS_001", assignmentName: "Name the Historical Events", courseName: "History",
            studentAnswers: ["J.R.Jayewardene", "Margaret Thatcher", "Sumerian", "1914", "1939"],
            questionStatus: ["Correct", "Correct", "Correct", "Correct", "Correct"], timeTaken: [2.5, 3, 2.5, 3, 2.5],
            score: "5/5", status: "Pass"
        },
        {
            aid: "MAT_001", assignmentName: "Calculate the Values", courseName: "Mathematics",
            studentAnswers: ["0", "1", "1296", "720", "132"],
            questionStatus: ["Correct", "Correct", "Correct", "Correct", "Correct"], timeTaken: [2.75, 2.5, 3, 2.75, 3],
            score: "5/5", status: "Pass"
        },
        {
            aid: "GEO_001", assignmentName: "Name the Capitals", courseName: "Geography",
            studentAnswers: ["Mumbai", "Canberra", "London", "Washington DC", "Torronto"],
            questionStatus: ["Incorrect", "Correct", "Correct", "Correct", "Correct"], timeTaken: [2.75, 2.5, 3, 2.75, 3],
            score: "4/5", status: "Pass"
        }]
    }

    let student_2 = {
        sid: "ST_002",
        Name: "Tenusha Guruge",
        password: 1234,
        assignments: [{
            aid: "GEO_001", assignmentName: "Name the Capitals", courseName: "Geography",
            studentAnswers: ["New Delhi", "Melbourne", "London", "Washington DC", "Torronto"],
            questionStatus: ["Correct", "Incorrect", "Correct", "Correct", "Correct"], timeTaken: [2.75, 2.5, 3, 2.75, 3],
            score: "4/5", status: "Pass"
        },
        {
            aid: "MAT_001", assignmentName: "Calculate the Values", courseName: "Mathematics",
            studentAnswers: ["0", "2", "1396", "720", "132"],
            questionStatus: ["Correct", "Incorrect", "Incorrect", "Correct", "Correct"], timeTaken: [3, 2.75, 2.75, 2.5, 2.75],
            score: "3/5", status: "Pass"
        },
        {
            aid: "HIS_001", assignmentName: "Name the Historical Events", courseName: "History",
            studentAnswers: ["R.Premadhasa", "Margaret Thatcher", "Egyptians", "1914", "1939"],
            questionStatus: ["Incorrect", "Correct", "Incorrect", "Correct", "Correct"], timeTaken: [2.75, 2.5, 3, 2.75, 3],
            score: "3/5", status: "Pass"
        }]
    }

    let student_3 = {
        sid: "ST_003",
        Name: "Vimukthi Rajapaksha",
        password: 1234,
        assignments: [{
            aid: "GEO_001", assignmentName: "Name the Capitals", courseName: "Geography",
            studentAnswers: ["Kolkata", "Melbourne", "London", "New York", "Torronto"],
            questionStatus: ["Incorrect", "Incorrect", "Correct", "Incorrect", "Correct"], timeTaken: [3, 2.75, 2.75, 2.5, 2.75],
            score: "2/5", status: "Fail"
        },
        {
            aid: "MAT_001", assignmentName: "Calculate the Values", courseName: "Mathematics",
            studentAnswers: ["0", "2", "1396", "720", "132"],
            questionStatus: ["Correct", "Incorrect", "Incorrect", "Correct", "Correct"], timeTaken: [2.75, 2.5, 3, 2.75, 3],
            score: "3/5", status: "Pass"
        },
        {
            aid: "HIS_001", assignmentName: "Name the Historical Events", courseName: "History",
            studentAnswers: ["R.Premadhasa", "Margaret Thatcher", "Egyptian", "1914", "1940"],
            questionStatus: ["Incorrect", "Correct", "Incorrect", "Correct", "Incorrect"], timeTaken: [3, 2.75, 2.75, 2.5, 2.75],
            score: "2/5", status: "Fail"
        }]
    }

    let stu_1 = new Students(student_1);
    stu_1.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Student detail insertion Successful");;
        }
    });

    let stu_2 = new Students(student_2);
    stu_2.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Student detail insertion Successful");;
        }
    });

    let stu_3 = new Students(student_3);
    stu_3.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Student detail insertion Successful");;
        }
    });

}

// db initialization of Teacher details
const initializeTeachers = () => {
    let teacher_1 = {
        tid: "TEA_001",
        Name: "Dharshana Kasthurirathna",
        assignments: [
            { aid: "GEO_001", assignmentName: "Name the Capitals", courseName: "Geography" },
            { aid: "MAT_001", assignmentName: "Calculate the Values", courseName: "Mathematics" }
        ]
    }

    let teacher_2 = {
        tid: "TEA_002",
        Name: "Dhammika De Silva",
        assignments: [
            { aid: "HIS_001", assignmentName: "Name the Historical Events", courseName: "History" }
        ]
    }


    let tea_1 = new Teaacher(teacher_1);
    tea_1.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Teacher detail insertion Successful");;
        }
    });

    let tea_2 = new Teaacher(teacher_2);
    tea_2.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Teacher detail insertion Successful");;
        }
    });


}

module.exports = { initiAssignment: initializeAssignment, initiStudents: initializeStudents, initiTeachers: initializeTeachers }