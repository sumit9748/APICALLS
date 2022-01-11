const router = require('express').Router();
const Teacher = require("../model/Teacher");

router.post("/", async (req, res) => {
    const newTeacher = new Teacher(req.body)
    try {
        const savedTeacher = await newTeacher.save();
        res.status(200).json(savedTeacher);

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        const res = await Teacher.findById(req.params.id)
        res.status(200).json(res)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;