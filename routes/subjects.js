const router = require('express').Router();
const Subject = require("../model/Subject");

router.post("/", async (req, res) => {
    const newSubject = new Subject(req.body)
    try {
        const savedSubject = await newSubject.save();
        res.status(200).json(savedSubject);

    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        if (!subject.teachers.includes(req.body.teacherId)) {
            await subject.updateOne({ $push: { teachers: req.body.teacherId } })
            res.status(200).json("successfully updated")
        } else res.status(403).json("already exist")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.get("/:id", async (req, res) => {
    try {
        const post = await Subject.findById(req.params.id);
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
