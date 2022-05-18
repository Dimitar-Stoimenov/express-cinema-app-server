const router = require('express').Router();

const { create } = require('../services/projections');
const { parseError } = require('../util');


router.post('/create', async (req, res) => {
    const data = {
        date: req.body.date,
        hour: req.body.hour,
        movieId: req.body.movieId,
        hallId: req.body.hallId,
        occupiedSeats: {
            row1: [],
            row2: [],
            row3: [],
            row4: [],
            row5: [],
            row6: [],
            row7: [],
            row8: [],
            row9: [],
            row10: [],
        }
    };

    try {
        const result = await create(data);

        res.status(201).json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(err.status || 400).json({ message });
    }
});

module.exports = router;