const { create } = require("./projections");
const { standartizeDate } = require("../util");

async function createMovie(hallId, movieId, date, hourAsNumber, regularPrice, studentsPrice) {
    if (typeof date === "string") {
        date = new Date(standartizeDate(date));
    };

    const data = {
        date: date,
        hour: hourAsNumber,
        movieId,
        hallId,
        price: {
            regular: regularPrice,
            students: studentsPrice,
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
    }

    const result = await create(data);
}

module.exports = {
    createMovie,
}