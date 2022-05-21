const Projection = require('../models/Projection');

async function create(data) {
    const result = new Projection(data);
    await result.save();

    return result;
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
    })
}

module.exports = {
    create,
    getProjectionsByDate,
};