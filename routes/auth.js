const router = require('express').Router();
const bcrypt = require("bcrypt");
const Student = require("../model/Student");

router.post("/register", async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new Student({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,

        });
        const save = await newUser.save();
        res.status(200).json(save);
    } catch (err) {
        res.status(500).send("error");
    }
})
router.post("/login", async (req, res) => {

    try {
        const user = await Student.findOne({ email: req.body.email });
        !user && res.status(400).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("unvalid password");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).send("error");
    }
});
module.exports = router;