const Hall = require('../models/Hall');

async function create(data) {
    const result = new Hall(data);
    await result.save();

    return result;
}

async function getAll() {
    return Hall.find({}).lean();
}

module.exports = {
    create,
    getAll,
};