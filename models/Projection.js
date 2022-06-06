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
        autopopulate: true,
        required: true,
    },
    hallId: {
        type: Schema.Types.ObjectId,
        ref: 'Hall',
        autopopulate: true,
        required: true,
    },
    price: {
        regular: Number,
        students: Number,
    },
    occupiedSeats: {
        "row1": [],
        "row2": [],
        "row3": [],
        "row4": [],
        "row5": [],
        "row6": [],
        "row7": [],
        "row8": [],
        "row9": [],
        "row10": [],
    }
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = model('Projection', schema);