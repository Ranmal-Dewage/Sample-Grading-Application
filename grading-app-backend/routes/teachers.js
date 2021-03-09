const express = require("express")
const route = express.Router();
const Teachers = require("../models/teacher_model")

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
