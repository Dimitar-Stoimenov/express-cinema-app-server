const Projection = require('../models/Projection');

async function create(data) {
    const result = new Projection(data);
    await result.save();

    return result;
}

async function pushTicket(projectionId, ticketId) {
    Projection.findOneAndUpdate(
        { _id: projectionId },
        { $push: { issuedTickets: ticketId } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                // console.log('added ticket to projection');
            }
        });
}

async function pushSeats(projectionId, seatsObj) {
    let data = await getProjectionById(projectionId);
    let newSeatsObj = data.occupiedSeats;

    if (!checkIfSeatsAreAvailable(data.occupiedSeats, seatsObj)) {
        throw new Error('Some seat is already taken!');
    }

    let selectedRowsArray = Object.entries(seatsObj).filter(x => x[1].length !== 0);
    selectedRowsArray.forEach(([row, seatsArr]) => {
        newSeatsObj[row].push(...seatsArr);
    })

    Projection.findOneAndUpdate(
        { _id: projectionId },
        { $set: { occupiedSeats: newSeatsObj } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                // console.log('added seats to projection');
            }
        });

    function checkIfSeatsAreAvailable(occupiedSeats, selectedSeatsObj) {
        let check = true;

        let selectedRowsArray = Object.entries(selectedSeatsObj).filter(x => x[1].length !== 0);
        selectedRowsArray.forEach(([row, seatsArr]) => {
            seatsArr.forEach(seat => {
                if (occupiedSeats[row].includes(seat)) {
                    check = false;
                }
            })
        })

        return check;
    }
}

async function getProjectionsByDate(date) {
    let next = new Date(date);
    next.setDate(date.getDate() + 1);

    let day = {
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    }

    let nextDay = {
        date: next.getDate(),
        month: next.getMonth(),
        year: next.getFullYear(),
    }

    return Projection.find({
        date: {
            $gte: new Date(day.year, day.month, day.date),
            $lt: new Date(nextDay.year, nextDay.month, nextDay.date),
        }
    }, { occupiedSeats: 0, issuedTickets: 0 })
}

async function getProjectionsByMovieId(movieId) {
    let today = new Date();
    // let yesterday = new Date(today);
    // yesterday.setDate(today.getDate() - 1);

    return Projection.find({
        movieId,
        date: {
            $gte: today,
        }
    }, { occupiedSeats: 0, issuedTickets: 0 })
}

async function getProjectionById(projectionId) {
    return Projection.findOne({
        _id: projectionId,
    })
}

module.exports = {
    create,
    getProjectionsByDate,
    getProjectionsByMovieId,
    getProjectionById,
    pushTicket,
    pushSeats,
};