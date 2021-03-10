const express = require("express");
const route = express.Router();
const Students = require("../models/student_model");

//login api of the students
route.post("/login", (req, res) => {

    try {

        const query = { sid: req.body.id, password: req.body.password }
        Students.find(query, (err, student) => {
            if (err) {
                console.log(err)
                res.status(500).json({ err })
            } else {
                if (student.length == 0) {
                    res.status(200).json([{ status: false }])
                } else {
                    res.status(200).json([{ status: true }])
                }
            }
        });


    } catch (err) {
        res.status(500).json({ err })
    }

});


//get particular student details
route.get("/:sid", (req, res) => {

    try {

        const query = { sid: req.params.sid }
        Students.find(query, (err, student) => {
            if (err) {
                console.log(err);
                res.status(500).json({ err });
            } else {
                res.status(200).json(student);
            }
        });


    } catch (err) {
        res.status(500).json({ err })
    }

});

//get all student results of a particular assignment
route.get("/assignment/:aid", (req, res) => {

    try {

        getAssignmentResults(req.params.aid)
            .then((students) => {

                filterAssignments(students, req.params.aid)
                    .then((filteredStudents) => {
                        res.status(200).json(filteredStudents)
                    })
                    .catch((err) => res.status(500).json({ err }))

            })
            .catch((err) => res.status(500).json({ err }))

    } catch (err) {
        res.status(500).json({ err })
    }

});






/** used function declarations **/


//function to get all assignment details of students
const getAssignmentResults = (aid) => {

    return new Promise((resolve, reject) => {

        const query = { "assignments.aid": aid }
        Students.find(query, (err, students) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(students);
            }
        });

    })

}


//assignment filtering function
const filterAssignments = (students, aid) => {

    return new Promise((resolve, reject) => {
        resolve(
            students.map((student) => {
                return {
                    _id: student._id,
                    sid: student.sid,
                    Name: student.Name,
                    assignments: student.assignments.filter((assignment) => assignment.aid == aid)
                }
            })
        )
    })

}


module.exports = route;