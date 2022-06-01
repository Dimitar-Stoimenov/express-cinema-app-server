const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');

const cors = require('./middlewares/cors');
const { PORT, DB_CONNECTION_STRING } = require('./constants.js');

const moviesController = require('./controllers/moviesController');
const hallsController = require('./controllers/hallsController');
const projectionsController = require('./controllers/projectionsController');
const { autoCreateProjectionsFiveDaysInAdvance } = require('./services/autoCreateProjections');

start();

async function start() {
    await new Promise((resolve, reject) => {
        mongoose.connect(DB_CONNECTION_STRING);

        const db = mongoose.connection;
        db.once('open', () => {
            console.log('database connected!');
            resolve();
        });
        db.on('error', (err) => reject(err));
    })

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use('/movies', moviesController);
    app.use('/halls', hallsController);
    app.use('/projections', projectionsController);

    app.get('/', (req, res) => {
        res.send('It works!');
    });

    cron.schedule('10 14 * * *', () => {
        autoCreateProjectionsFiveDaysInAdvance();
        console.log('cron schedule ran successfully');
    });

    app.listen(PORT, () => console.log(`REST Service is running on port ${PORT}...`));
}