const express = require("express")
const route = express.Router();
const fetch = require('node-fetch');
const Assignments = require("../models/assignment_model");

//get particular assignment details
route.get("/:aid", (req, res) => {

    try {

        const query = { aid: req.params.aid }
        Assignments.find(query, (err, assignment) => {
            if (err) {
                console.log(err);
                res.status(500).json({ err });
            } else {
                res.status(200).json(assignment);
            }
        });


    } catch (err) {
        res.status(500).json({ err })
    }

});


// get statistical details about the assignment questions
route.get("/:aid/statistics", (req, res) => {

    try {

        fetch("http://localhost:3000/students/assignment/" + req.params.aid)
            .then(res => res.json())
            .then(response => {

                generateAssignmenttSatistics(response)
                    .then((data) => {

                        try {

                            const query = { aid: req.params.aid }
                            Assignments.find(query, (err, assignment) => {
                                if (err) {
                                    console.log(err);
                                    res.status(500).json({ err });
                                } else {
                                    let assignmentStats = { ...data, ...assignment["0"].toObject() }
                                    res.status(200).json([assignmentStats]);
                                }
                            });

                        } catch (err) {
                            res.status(500).json({ err })
                        }

                    })

            })
            .catch((err) => res.status(500).json({ err }))


    } catch (err) {
        res.status(500).json({ err })
    }

})





/** used function declarations **/


// filter out time arrays per question by students
const filterTimePerQuestion = (data) => {

    return new Promise((resolve, reject) => {
        resolve(
            data.map((student) => {
                return (
                    student.assignments[0].timeTaken
                )
            })
        )
    })

}

// filter out time arrays per question by students
const filterAverageTimePerQuestion = (data, length) => {

    return new Promise((resolve, reject) => {
        resolve(
            data.map((totalTime) => {
                return (
                    totalTime / length
                )
            })
        )
    })

}


// filter out correct answer arrays by students
const filterCorrectQuestion = (data) => {

    return new Promise((resolve, reject) => {
        resolve(
            data.map((student) => {
                return (
                    student.assignments[0].questionStatus.map((question) => {
                        if (question === "Correct") {
                            return 1
                        } else {
                            return 0
                        }
                    })
                )
            })
        )
    })
}


// filter out incorrect answer arrays  by students
const filterIncorrectQuestion = (data) => {

    return new Promise((resolve, reject) => {
        resolve(
            data.map((student) => {
                return (
                    student.assignments[0].questionStatus.map((question) => {
                        if (question === "Incorrect") {
                            return 1
                        } else {
                            return 0
                        }
                    })
                )
            })
        )
    })
}


//column sum of the 2D arrays
const sumArraysVerticleDirection = (array) => {

    return new Promise((resolve, reject) => {
        resolve(
            array.reduce(function (r, a) {
                a.forEach(function (b, i) {
                    r[i] = (r[i] || 0) + b;
                });
                return r;
            }, [])
        )
    })

}

//generate statistics per question basis
const generateAssignmenttSatistics = async (res) => {

    let correctQuestionArray = await filterCorrectQuestion(res)
    let incorrectQuestionarray = await filterIncorrectQuestion(res)
    let TimeTakenArray = await filterTimePerQuestion(res)
    let sizeOfTimeArray = TimeTakenArray.length


    let correctQuestionSum = await sumArraysVerticleDirection(correctQuestionArray)
    let incorrectQuestionSum = await sumArraysVerticleDirection(incorrectQuestionarray)
    let TimeTakenSum = await sumArraysVerticleDirection(TimeTakenArray)
    let averageTimeTaken = await filterAverageTimePerQuestion(TimeTakenSum, sizeOfTimeArray)


    return new Promise((reslove, reject) => {
        reslove({
            correctQuestionSum: correctQuestionSum,
            incorrectQuestionSum: incorrectQuestionSum,
            averageTimeTaken: averageTimeTaken
        })
    })

}

module.exports = route;