const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema(
    {
        teacher: {
            type: String,
            max: 30,
            unique: true,
        }, subject: {
            type: Array,
            default: [],
        },

    }, { timestamps: true },
);
module.exports = mongoose.model('Teacher', teacherSchema)