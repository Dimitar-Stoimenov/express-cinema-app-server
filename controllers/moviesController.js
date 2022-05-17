const router = require('express').Router();

const { getAll, create, getById, update } = require('../services/movies');
const { parseError } = require('../util');

router.get('/', async (req, res) => {
    const data = await getAll();

    res.json(data);
});

router.get('/:id', async (req, res) => {
    const movie = await getById(req.params.id);

    res.json(movie);
});

router.get('/top-movies', async (req, res) => {
    const data = await getAll();

    let sortedArr = data.sort((a, b) => {
        if (b.movieRating === a.movieRating) {
            return b.voters.length - a.voters.length;
        }

        return b.movieRating - a.movieRating;
    });

    let sortedData = [sortedArr[0], sortedArr[1], sortedArr[2], sortedArr[3], sortedArr[4], sortedArr[5], sortedArr[6], sortedArr[7]];

    res.json(sortedData);
});

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
        type: req.body.type,
        cast: req.body.cast.split(',').map(x => x.trim()), //separate by coma
        movieRating: req.body.movieRating,
        voters: [],
    };

    try {
        const result = await create(data);

        res.status(201).json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(err.status || 400).json({ message });
    }
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