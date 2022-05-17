const Movie = require('../models/Movie');

async function getAll() {
    return Movie.find({}).lean();
}

async function create(data) {
    const result = new Movie(data);
    await result.save();

    return result;
}

async function getById(id) {
    return Movie.findById(id);
}

module.exports = {
    getAll,
    getById,
    create,
    // update,
    // remove,
};