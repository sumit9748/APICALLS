const router = require('express').Router();
const Student = require("../model/Student");

router.post("/", async (req, res) => {
    const newStudent = new Student(req.body)
    try {
        const savedStudent = await newStudent.save();
        res.status(200).json(savedStudent);

    } catch (err) {
        res.status(500).json(err)
    }
})



router.get("/find/:id", async (req, res) => {
    try {
        const res = await Student.findById(req.params.id)
        res.status(200).json(res)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;