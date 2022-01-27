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

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        try {
            await Student.findByIdAndUpdate(req.params.id, { $set: req.body })
            res.status(200).json("account updated successfully")
        } catch (err) {
            res.status(500).json(err)
        }
    } else res.status(200).json("sorry you cant proceed")
})

router.delete("/:id", async (req, res) => {
    if (req.params.id === req.body.userId) {
        try {
            await Student.findByIdAndDelete(req.params.id)
            res.status(200).json("account updated successfully")
        } catch (err) {
            res.status(500).json(err)
        }
    } else res.status(500).json("sorry you cant do that")
})

module.exports = router;