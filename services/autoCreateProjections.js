const { createProjection } = require("./autoCreateProjectionsLogic")

const movies = {
    "none": "none",

    "Doctor Strange": "6283f9498894d98659d3a280",
    "Top Gun: Maverick": "629524d8246adbfbcfa1e9e9",
    "The Batman": "629e01420bcc10cc5a05c24a",

    "Shrek": "6283e28b90bd32f5df86fb89",
    "Shrek 2": "629522ce246adbfbcfa1e9b1",
    "Space Jam 2": "6290c7de2ad2c73e309c8023",
    "SpongeBob": "6290cf1a2ad2c73e309c8031",
    "Zootopia": "629de8f50bcc10cc5a05c21f",
    "PAW Patrol": "629de9ca0bcc10cc5a05c224",
    "How to train your dragon": "629dfc0d0bcc10cc5a05c23e",
    "Tom and Jerry": "629f008886fdfa94374238dd",
    "Minions": "629f04e489e9f35c3a4211b6",
    "Minions Rise": "629f057589e9f35c3a4211b8",

    "The Dark Knight": "6283a6deccef9353b7bce251",
    "Inception": "6283f47c8894d98659d3a268",
    "Interstellar": "6283f54e8894d98659d3a26e",
    "Fight Club": "629687e2a2efd6efa2707bdd",
    "Pulp Fiction": "6296861ba2efd6efa2707bb5",
    "Django": "629f443fd3825f5f4e4efa76",
    "Sin City": "629f46269b6de8937d8436a9",
    "Top Gun Original": "629f4f40bf4a2e310568e7f4",

    "Justice League": "6283f7998894d98659d3a275",
    "A Star Is Born": "6290d1c42ad2c73e309c803c",
    "Spider-Man: Homecoming": "629683e7a2efd6efa2707ba2",
    "Spider-Man: Far from Home": "629682f7a2efd6efa2707b9d",
    "Spider-Man: No Way Home": "6290c4612ad2c73e309c7fbe",
    "Dune": "629eff1086fdfa94374238db",
    "Joker": "629f433e6229242edb708bf7",
    "Once Upon a Time": "629f5404e4bfa4113068c9e4",
}

function returnRandomFamilyMovie() {
    let familyMoviesIdsArray = Object.keys({
        "Shrek": "6283e28b90bd32f5df86fb89",
        "Shrek 2": "629522ce246adbfbcfa1e9b1",
        "Space Jam 2": "6290c7de2ad2c73e309c8023",
        "SpongeBob": "6290cf1a2ad2c73e309c8031",
        "Zootopia": "629de8f50bcc10cc5a05c21f",
        "PAW Patrol": "629de9ca0bcc10cc5a05c224",
        "How to train your dragon": "629dfc0d0bcc10cc5a05c23e",
        "Tom and Jerry": "629f008886fdfa94374238dd",
        "Minions": "629f04e489e9f35c3a4211b6",
        "Minions Rise": "629f057589e9f35c3a4211b8",
    });

    function rand(items) {
        return items[items.length * Math.random() | 0];
    };

    return rand(familyMoviesIdsArray);
}

const halls = {
    "IMAX 3D": "6284f1239c7c4c9c40d83758",
    "4DX": "6284f1d49c7c4c9c40d8375a",
    "2D-A": "6284f32b9c7c4c9c40d8375c",
    "2D-B": "6284f32d9c7c4c9c40d8375e",
    "2D-C": "6284f3309c7c4c9c40d83760",
}

const autoCreateProjectionsInAdvance = (daysInAdvance) => {
    if (!daysInAdvance && daysInAdvance !== 0) {
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
        createDailyProjections("The Batman", "Top Gun: Maverick", "Doctor Strange", "Inception", "Minions", "Shrek 2", "Tom and Jerry", "SpongeBob", "PAW Patrol", "Spider-Man: Homecoming");
        console.log('projections created in advance for Monday!');
    } else if (dayOfweek === 2) { // TUESDAY
        createDailyProjections("Doctor Strange", "The Batman", "Top Gun: Maverick", "The Dark Knight", "Space Jam 2", "Shrek", "Zootopia", "Spider-Man: Far from Home", "Top Gun: Maverick", "A Star Is Born");
        console.log('projections created in advance for Tuesday!');
    } else if (dayOfweek === 3) { // WEDNESDAY
        createDailyProjections("Top Gun: Maverick", "The Batman", "Doctor Strange", "Interstellar", "How to train your dragon", "PAW Patrol", "SpongeBob", "none", "Justice League", "Fight Club")
        console.log('projections created in advance for Wednesday!');
    } else if (dayOfweek === 4) { // THURSDAY
        createDailyProjections("The Batman", "Doctor Strange", "Top Gun: Maverick", "Joker", "Shrek 2", "Minions Rise", "Spider-Man: No Way Home", "Dune", "Spider-Man: Homecoming", "Django");
        console.log('projections created in advance for Thursday!');
    } else if (dayOfweek === 5) { // FRIDAY
        createDailyProjections("Doctor Strange", "Top Gun: Maverick", "The Batman", "Top Gun Original", "Zootopia", "Shrek", "Space Jam 2", "Minions", "Dune", "Once Upon a Time");
        console.log('projections created in advance for Friday!');
    } else if (dayOfweek === 6) { // SATURDAY
        createDailyProjections("Top Gun: Maverick", "The Batman", "Doctor Strange", "Sin City", "Minions Rise", "Tom and Jerry", "Shrek 2", "PAW Patrol", "Spider-Man: Far from Home", "Joker");
        console.log('projections created in advance for Saturday!');
    } else {
        return console.log('autoCreateProjectionsFiveDaysInAdvance failed - wrong day of week property passed...');
    }

    function createDailyProjections(topBoxOffice, secondBox, thirdBox, classicMovie, familyOne, familyTwo, familyThree, earlyDayRandom, midDayRandom, lateDayRandom) {
        function randomizeHour(hour) {
            let arr = [];
            for (let i = 0; i < 4; i++) {
                let randomized = hour - 15 + i * 15;

                let split = randomized.toString().split('');
                if (split[2] > 5) {
                    split[2] = 4;
                }
                let result = Number(split.join(''));

                arr.push(result);
            };

            let randomHour = arr[Math.floor(arr.length * Math.random())];

            return randomHour;
        }

        createProjection(halls["2D-A"], movies[familyOne], futureDay, 1400, 12, 10);
        createProjection(halls["2D-A"], movies[familyTwo], futureDay, 1600, 12, 10);
        createProjection(halls["2D-A"], movies[midDayRandom], futureDay, randomizeHour(1830), 12, 10);
        createProjection(halls["2D-A"], movies[thirdBox], futureDay, 2100, 12, 10);
        createProjection(halls["2D-B"], movies[earlyDayRandom], futureDay, randomizeHour(1500), 12, 10);
        createProjection(halls["2D-B"], movies[topBoxOffice], futureDay, randomizeHour(1730), 12, 10);
        createProjection(halls["2D-B"], movies[secondBox], futureDay, 2000, 12, 10);
        createProjection(halls["2D-B"], movies[classicMovie], futureDay, 2230, 12, 10);
        createProjection(halls["2D-C"], movies[returnRandomFamilyMovie()], futureDay, 1445, 12, 10);
        createProjection(halls["2D-C"], movies[thirdBox], futureDay, 1700, 12, 10);
        createProjection(halls["2D-C"], movies[topBoxOffice], futureDay, 1930, 12, 10);
        createProjection(halls["2D-C"], movies[lateDayRandom], futureDay, 2130, 12, 10);
        createProjection(halls["IMAX 3D"], movies[familyThree], futureDay, 1630, 16, 13);
        createProjection(halls["IMAX 3D"], movies[secondBox], futureDay, randomizeHour(1900), 16, 13);
        createProjection(halls["IMAX 3D"], movies[topBoxOffice], futureDay, randomizeHour(2200), 16, 13);
        createProjection(halls["4DX"], movies[thirdBox], futureDay, randomizeHour(1800), 20, 17);
        createProjection(halls["4DX"], movies[topBoxOffice], futureDay, 2000, 20, 17);
        createProjection(halls["4DX"], movies[secondBox], futureDay, randomizeHour(2230), 20, 17);
    }
}

module.exports = {
    autoCreateProjectionsInAdvance,
}