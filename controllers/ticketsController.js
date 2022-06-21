const router = require('express').Router();

const { create } = require('../services/tickets')
const { parseError } = require('../util');

router.post('/create', async (req, res) => {
    const data = {
        //TODO userId: userId,
        occupiedSeats: {
            row1: req.body.occupiedSeats.row1,
            row2: req.body.occupiedSeats.row2,
            row3: req.body.occupiedSeats.row3,
            row4: req.body.occupiedSeats.row4,
            row5: req.body.occupiedSeats.row5,
            row6: req.body.occupiedSeats.row6,
            row7: req.body.occupiedSeats.row7,
            row8: req.body.occupiedSeats.row8,
            row9: req.body.occupiedSeats.row9,
            row10: req.body.occupiedSeats.row10,
        },
        projectionId: req.body.projectionId,
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