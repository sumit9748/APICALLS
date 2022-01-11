const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema(
    {
        teacher: {
            type: Number,
            max: 4,
            unique: true,
        },
        subjects: {
            type: String,
        },
    }, { timestamps: true },
);
module.exports = mongoose.model('Teacher', teacherSchema)