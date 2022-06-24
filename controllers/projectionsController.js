const router = require('express').Router();

const { create, getProjectionsByDate, getProjectionsByMovieId, getProjectionById, pushTicket, pushSeats } = require('../services/projections');
const { parseError, standartizeDate } = require('../util');

router.get('/program/:date', async (req, res) => {
    const date = standartizeDate(req.params.date);

    var d = new Date(date);
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000 /* convert to UTC */ + (/* UTC+6 */ 6) * 60 * 60 * 1000);

    const data = await getProjectionsByDate(d);

    res.json(data);
});

router.post('/create', async (req, res) => {
    const data = {
        date: req.body.date,
        hour: req.body.hour,
        movieId: req.body.movieId,
        hallId: req.body.hallId,
        price: {
            regular: req.body.regularPrice,
            students: req.body.studentsPrice
        },
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

router.get('/movieId/:movieId', async (req, res) => {
    const data = await getProjectionsByMovieId(req.params.movieId);

    res.json(data);
});

router.get('/id/:projectionId', async (req, res) => {
    const data = await getProjectionById(req.params.projectionId);

    res.json(data);
});

router.post('/add-ticket', async (req, res) => {
    const data = {
        ticketId: req.body.ticketId,
        seatsObj: req.body.seatsObj,
        projectionId: req.body.projectionId,
    }

    try {
        const seatsResult = await pushSeats(data.projectionId, data.seatsObj);
        const ticketResult = await pushTicket(data.projectionId, data.ticketId);

        res.status(201).json({ seatsResult, ticketResult });
    } catch (err) {
        const message = parseError(err);
        res.status(402).json({ message });
    }
})

module.exports = router;