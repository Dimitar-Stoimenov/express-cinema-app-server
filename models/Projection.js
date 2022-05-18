const { Schema, model } = require('mongoose');

const schema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    hour: {
        type: Number,
        required: true,
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    },
    hallId: {
        type: Schema.Types.ObjectId,
        ref: 'Hall',
    },
    occupiedSeats: {
        "row1": [Number],
        "row2": [Number],
        "row3": [Number],
        "row4": [Number],
        "row5": [Number],
        "row6": [Number],
        "row7": [Number],
        "row8": [Number],
        "row9": [Number],
        "row10": [Number],
    }
});

module.exports = model('Projection', schema);