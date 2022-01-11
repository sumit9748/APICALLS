const mongoose = require('mongoose')
//in the section page we make sections as 5A,5B,5C also..
const optionalSchema = new mongoose.Schema(
    {
        optional: {
            type: Number,
            enum: [1, 2, 3],

        },
        sections: {
            type: Number,
            enum: [5, 6, 7],
        },
        students: {
            type: Array,
            default: [],

        },
    }, { timestamps: true },
);
module.exports = mongoose.model('Optional', optionalSchema)