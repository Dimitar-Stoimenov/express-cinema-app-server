const router = require('express').Router();

const { getAll, create, getById, update, getTop, getClassic, getFamily, getMoviesByName } = require('../services/movies');
const { parseError } = require('../util');

router.post('/create', async (req, res) => {
    const data = {
        movieName: req.body.movieName,
        posterLink: req.body.posterLink,
        description: req.body.description,
        movieCategory: req.body.movieCategory,
        genres: req.body.genres.split(', ').map(x => x.trim()), //separate by coma
        director: req.body.director,
        premiere: req.body.premiere,
        length: req.body.length,
        movieType: req.body.movieType,
        cast: req.body.cast.split(',').map(x => x.trim()), //separate by coma
        movieRating: 4.1,
        voters: ["dummy"],
    };

    try {
        const result = await create(data);

        res.status(201).json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(err.status || 400).json({ message });
    }
});

router.get('/', async (req, res) => {
    const data = await getAll();

    res.json(data);
});

router.get('/top-movies', async (req, res) => {
    const data = await getTop();

    res.json(data);
});

router.get('/classic-movies', async (req, res) => {
    const data = await getClassic();

    res.json(data);
});

router.get('/family-movies', async (req, res) => {
    const data = await getFamily();

    res.json(data);
});

router.get('/search/:string', async (req, res) => {
    const data = await getMoviesByName(req.params.string);

    res.json(data);
});

router.get('/:id', async (req, res) => {
    const movie = await getById(req.params.id);

    res.json(movie);
});

router.put('/:id/rate', async (req, res) => {
    const movie = await getById(req.params.id);

    let updatedMovie = Object.create(movie);

    const data = {
        movieRating: Number(req.body.rating),
        user: req.body.user,
    };

    let votersCount = Number(movie.voters.length);
    let newRating = (((movie.movieRating * votersCount) + data.movieRating) / (votersCount + 1)).toFixed(2);
    updatedMovie.voters.push(data.user);
    updatedMovie.movieRating = newRating;

    try {
        const result = await update(movie, updatedMovie);

        res.status(200).json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(err.status || 400).json({ message });
    }
});

module.exports = router;