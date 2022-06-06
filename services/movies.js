const Movie = require('../models/Movie');

async function getAll() {
    return Movie.find({}).sort({ "movieName": "asc" }).lean();
}

async function getTop() {
    return Movie.find().sort({ "movieRating": -1 }).limit(8).lean();
}

async function getClassic() {
    return Movie.find({ movieType: "classic" }).sort({ "movieName": "asc" }).lean();
}

async function getFamily() {
    return Movie.find({ movieType: "family" }).sort({ "movieName": "asc" }).lean();
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

async function getMoviesByName(string) {
    const regex = new RegExp(string, 'i');
    return Movie.find({ movieName: { $regex: regex } });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    getTop,
    getClassic,
    getFamily,
    getMoviesByName,
    // remove,
};