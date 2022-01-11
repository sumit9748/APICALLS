const mongoose = require('mongoose')
const subjectSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            unique: true,
        },
        teachers: {
            type: Array,
            default: [],

        },
    }, { timestamps: true },
);
module.exports = mongoose.model('Subject', subjectSchema)