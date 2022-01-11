const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema(
    {
        student: {
            type: Number,
            unique: true,
            max: 40,
        },
        sections: {
            type: Number,
            enum: [5, 6, 7],
        },
        optional: {
            type: Array,
            max: 2,
            min: 2,

        },
    }, { timestamps: true },
);
module.exports = mongoose.model('Student', studentSchema)