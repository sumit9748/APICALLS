const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            max: 30,
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        section: {
            type: Number,
            enum: [5, 6, 7, 8, 9, 10, 11, 12],
        },
        roll: {
            type: Number,
            unique: true,
            max: 50,
        },
        stream: {
            type: String,
        },
        hobby: {
            type: String,
            default: "Reading"
        },
    }, { timestamps: true },
);
module.exports = mongoose.model('Student', studentSchema)