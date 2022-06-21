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
        "row1": [{
            type: Number,
            unique: true,
        }],
        "row2": [{
            type: Number,
            unique: true,
        }],
        "row3": [{
            type: Number,
            unique: true,
        }],
        "row4": [{
            type: Number,
            unique: true,
        }],
        "row5": [{
            type: Number,
            unique: true,
        }],
        "row6": [{
            type: Number,
            unique: true,
        }],
        "row7": [{
            type: Number,
            unique: true,
        }],
        "row8": [{
            type: Number,
            unique: true,
        }],
        "row9": [{
            type: Number,
            unique: true,
        }],
        "row10": [{
            type: Number,
            unique: true,
        }],
    },
    issuedTickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
    }]
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = model('Projection', schema);