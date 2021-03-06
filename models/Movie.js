const { Schema, model } = require('mongoose');

const schema = new Schema({
    movieName: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be atleast 2 characters long'],
    },
    posterLink: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be atleast 10 characters long'],
    },
    genres: [String],
    director: String,
    movieCategory: String,
    premiere: String,
    length: {
        type: String,
        required: [true, 'Length is required'],
    },
    cast: [String],
    movieRating: Number,
    voters: [String],
    movieType: String,
});

module.exports = model('Movie', schema);