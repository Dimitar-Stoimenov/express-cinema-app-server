const Projection = require('../models/Projection');

async function create(data) {
    const result = new Projection(data);
    await result.save();

    return result;
}

module.exports = {
    create
};