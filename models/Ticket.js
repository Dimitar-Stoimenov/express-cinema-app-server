const { Schema, model } = require('mongoose');

const schema = new Schema({
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
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
    },
    projectionId: {
        type: Schema.Types.ObjectId,
        ref: 'Projection',
        autopopulate: true,
        required: true,
    },
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = model('Ticket', schema);