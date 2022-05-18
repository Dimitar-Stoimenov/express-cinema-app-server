const { Schema, model } = require('mongoose');

const schema = new Schema({
    hallName: {
        type: String,
        required: true,
    },
    seats: {
        "row1": Number,
        "row2": Number,
        "row3": Number,
        "row4": Number,
        "row5": Number,
        "row6": Number,
        "row7": Number,
        "row8": Number,
        "row9": Number,
        "row10": Number,
    }
});

module.exports = model('Hall', schema);