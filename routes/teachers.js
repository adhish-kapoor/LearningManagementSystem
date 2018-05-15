const express = require("express")
const route = express.Router();
const Teacher = require("../database/db").Teacher;

route.get('/', (req, res) => {
    Teacher.findAll().then((teachers) => {
            res.status(200).send({
                success: true,
                teachers: teachers
            })

        })
        .catch((err) => {
            res.status(501).send({
                success: false,
                message: "No Teacher found"
            })
        })
})

route.get('/:id', (req, res) => {
    Teacher.findById(req.params.id)
        .then((teachers) => {        //finding as http://localhost:3000/teachers/1
            res.status(200).send({
                success: true,
                teachers: teachers
            })
        })
        .catch((err) => {
            res.status(501).send({
                success: false,
                message: "No Teacher found"
            })
        })
})

module.exports = route;