const router = require('express').Router();

const { create } = require('../services/halls');
const { parseError } = require('../util');


router.post('/create', async (req, res) => {
    const data = {
        hallName: req.body.hallName,
        seats: {
            row1: Number(req.body.row1),
            row2: Number(req.body.row2),
            row3: Number(req.body.row3),
            row4: Number(req.body.row4),
            row5: Number(req.body.row5),
            row6: Number(req.body.row6),
            row7: Number(req.body.row7),
            row8: Number(req.body.row8),
            row9: Number(req.body.row9),
            row10: Number(req.body.row10),
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