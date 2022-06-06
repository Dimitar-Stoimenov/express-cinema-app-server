const { createProjection } = require("./autoCreateProjectionsLogic")

const movies = {
    "none": "none",
    "The Dark Knight": "6283a6deccef9353b7bce251",
    "Shrek": "6283e28b90bd32f5df86fb89",
    "Inception": "6283f47c8894d98659d3a268",
    "Interstellar": "6283f54e8894d98659d3a26e",
    "Justice League": "6283f7998894d98659d3a275",
    "Doctor Strange": "6283f9498894d98659d3a280",
    "Space Jam": "6290c7de2ad2c73e309c8023",
    "SpongeBob": "6290cf1a2ad2c73e309c8031",
    "Spider-Man: No Way Home": "6290c4612ad2c73e309c7fbe",
    "A Star Is Born": "6290d1c42ad2c73e309c803c",
    "Shrek 2": "629522ce246adbfbcfa1e9b1",
    "Top Gun: Maverick": "629524d8246adbfbcfa1e9e9",
    "Spider-Man: Far from Home": "629682f7a2efd6efa2707b9d",
    "Spider-Man: Homecoming": "629683e7a2efd6efa2707ba2",
    "Pulp Fiction": "6296861ba2efd6efa2707bb5",
    "Fight Club": "629687e2a2efd6efa2707bdd",
    "Zootopia": "629de8f50bcc10cc5a05c21f",
    "PAW Patrol": "629de9ca0bcc10cc5a05c224",
    "How to train your dragon": "629dfc0d0bcc10cc5a05c23e",
    "The Batman": "629e01420bcc10cc5a05c24a",
}

const halls = {
    "IMAX 3D": "6284f1239c7c4c9c40d83758",
    "4DX": "6284f1d49c7c4c9c40d8375a",
    "2D-A": "6284f32b9c7c4c9c40d8375c",
    "2D-B": "6284f32d9c7c4c9c40d8375e",
    "2D-C": "6284f3309c7c4c9c40d83760",
}

const autoCreateProjectionsInAdvance = (daysInAdvance) => {
    if (!daysInAdvance) {
        return null;
    }

    const today = new Date();
    let futureDay = new Date(today);
    futureDay.setDate(today.getDate() + daysInAdvance);
    let dayOfweek = futureDay.getDay();

    if (dayOfweek === 0) { // SUNDAY
        createDailyProjections("Top Gun: Maverick", "Doctor Strange", "The Batman", "Pulp Fiction", "Zootopia", "How to train your dragon", "Shrek", "Spider-Man: No Way Home", "Justice League", "none");
        console.log('projections created in advance for Sunday!');
    } else if (dayOfweek === 1) { // MONDAY
        createDailyProjections("The Batman", "Top Gun: Maverick", "Doctor Strange", "Inception", "Shrek", "Shrek 2", "Space Jam", "SpongeBob", "PAW Patrol", "Spider-Man: Homecoming");
        console.log('projections created in advance for Monday!');
    } else if (dayOfweek === 2) { // TUESDAY
        createDailyProjections("Doctor Strange", "The Batman", "Top Gun: Maverick", "The Dark Knight", "SpongeBob", "Shrek 2", "Zootopia", "Spider-Man: Far from Home", "Top Gun: Maverick", "A Star Is Born");
        console.log('projections created in advance for Tuesday!');
    } else if (dayOfweek === 3) { // WEDNESDAY
        createDailyProjections("Top Gun: Maverick", "The Batman", "Doctor Strange", "Interstellar", "How to train your dragon", "PAW Patrol", "Space Jam", "none", "Justice League", "Fight Club")
        console.log('projections created in advance for Wednesday!');
    } else if (dayOfweek === 4) { // THURSDAY
        // createDailyProjections("The Batman", "Doctor Strange", "Top Gun: Maverick",);
        // console.log('projections created in advance for Thursday!');
    } else if (dayOfweek === 5) { // FRIDAY

        // console.log('projections created in advance for Friday!');
    } else if (dayOfweek === 6) { // SATURDAY

    } else {
        return console.log('autoCreateProjectionsFiveDaysInAdvance failed!!!');
    }

    function createDailyProjections(topBoxOffice, secondBox, thirdBox, classicMovie, familyOne, familyTwo, familyThree, earlyDayRandom, midDayRandom, lateDayRandom) {
        createProjection(halls["2D-A"], movies[familyOne], futureDay, 1400, 12, 10);
        createProjection(halls["2D-A"], movies[familyTwo], futureDay, 1600, 12, 10);
        createProjection(halls["2D-A"], movies[midDayRandom], futureDay, 1830, 12, 10);
        createProjection(halls["2D-A"], movies[thirdBox], futureDay, 2100, 12, 10);
        createProjection(halls["2D-B"], movies[earlyDayRandom], futureDay, 1500, 12, 10);
        createProjection(halls["2D-B"], movies[topBoxOffice], futureDay, 1730, 12, 10);
        createProjection(halls["2D-B"], movies[secondBox], futureDay, 2000, 12, 10);
        createProjection(halls["2D-B"], movies[classicMovie], futureDay, 2230, 12, 10);
        createProjection(halls["2D-C"], movies[thirdBox], futureDay, 1600, 12, 10);
        createProjection(halls["2D-C"], movies[topBoxOffice], futureDay, 1830, 12, 10);
        createProjection(halls["2D-C"], movies[lateDayRandom], futureDay, 2100, 12, 10);
        createProjection(halls["IMAX 3D"], movies[familyThree], futureDay, 1630, 16, 13);
        createProjection(halls["IMAX 3D"], movies[secondBox], futureDay, 1900, 16, 13);
        createProjection(halls["IMAX 3D"], movies[topBoxOffice], futureDay, 2230, 16, 13);
        createProjection(halls["4DX"], movies[thirdBox], futureDay, 1800, 20, 17);
        createProjection(halls["4DX"], movies[topBoxOffice], futureDay, 2000, 20, 17);
        createProjection(halls["4DX"], movies[secondBox], futureDay, 2230, 20, 17);
    }
}

module.exports = {
    autoCreateProjectionsInAdvance,
}