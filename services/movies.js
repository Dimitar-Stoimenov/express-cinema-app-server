const Movie = require('../models/Movie');

async function getAll() {
    return Movie.find({}).lean();
}

async function getTop() {
    return Movie.find().sort({ "movieRating": -1 }).limit(8);
}

async function getClassic() {
    return Movie.find({ movieType: "classic" });
}

async function getFamily() {
    return Movie.find({ movieType: "family" });
}

async function create(data) {
    const result = new Movie(data);
    await result.save();

    return result;
}

async function update(original, updated) {
    Object.assign(original, updated);
    await original.save();

    return original;
}

async function getById(id) {
    return Movie.findById(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    getTop,
    getClassic,
    getFamily,
    // remove,
};