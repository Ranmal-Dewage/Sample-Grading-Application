const express = require("express")
const route = express.Router();
const Teachers = require("../models/teacher_model")

//login api of the teachers
route.post("/login", (req, res) => {

    try {

        const query = { tid: req.body.id, password: req.body.password }
        Teachers.find(query, (err, teacher) => {
            if (err) {
                console.log(err)
                res.status(500).json({ err })
            } else {
                if (teacher.length == 0) {
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


//get particular teacher deatils
route.get("/:tid", (req, res) => {

    try {

        const query = { tid: req.params.tid }
        Teachers.find(query, (err, teacher) => {
            if (err) {
                console.log(err);
                res.status(500).json({ err });
            } else {
                res.status(200).json(teacher);
            }
        });

    } catch (err) {
        res.status(500).json({ err })
    }

});

module.exports = route;
