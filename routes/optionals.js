const router = require('express').Router();
const Optional = require("../model/Optional");

router.post("/", async (req, res) => {
    const newOptional = new Optional(req.body)
    try {
        const savedOptional = await newOptional.save();
        res.status(200).json(savedOptional);

    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const optional = await Optional.findById(req.params.id);
        if (!optional.students.includes(req.body.studentId)) {
            await optional.updateOne({ $push: { students: req.body.studentId } })
            res.status(200).json("successfully updated")
        } else res.status(403).json("already exist")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.get("/find/:id", async (req, res) => {
    try {
        const res = await Optional.findById(req.params.id)
        res.status(200).json(res)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;