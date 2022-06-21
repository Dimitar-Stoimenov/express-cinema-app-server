const Ticket = require('../models/Ticket');

async function create(data) {
    const result = new Ticket(data);
    await result.save();

    let newObj = {
        occupiedSeats: result.toObject().occupiedSeats,
        _id: result.toObject()._id
    }

    return newObj;
}

module.exports = {
    create,
};