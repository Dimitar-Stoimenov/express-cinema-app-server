const { createMovie } = require("./autoCreateProjectionsLogic")

const movies = {
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
    let fiveDaysAfter = new Date(today);
    fiveDaysAfter.setDate(today.getDate() + daysInAdvance);
    let dayOfweek = fiveDaysAfter.getDay();

    if (dayOfweek === 0) { // SUNDAY
        createMovie(halls["2D-A"], movies["Shrek"], fiveDaysAfter, 1400, 12, 10);
        createMovie(halls["2D-A"], movies["Shrek 2"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-A"], movies["SpongeBob"], fiveDaysAfter, 1830, 12, 10);
        // createMovie(halls["2D-A"], movies["Inception"], fiveDaysAfter, 2100, 12, 10);
        createMovie(halls["2D-B"], movies["Doctor Strange"], fiveDaysAfter, 1730, 12, 10);
        createMovie(halls["2D-B"], movies["Spider-Man: Far from Home"], fiveDaysAfter, 2000, 12, 10);
        createMovie(halls["2D-B"], movies["Doctor Strange"], fiveDaysAfter, 2230, 12, 10);
        createMovie(halls["2D-C"], movies["SpongeBob"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-C"], movies["Space Jam"], fiveDaysAfter, 1830, 12, 10);
        createMovie(halls["2D-C"], movies["Top Gun: Maverick"], fiveDaysAfter, 2100, 12, 10);
        createMovie(halls["IMAX 3D"], movies["Shrek"], fiveDaysAfter, 1630, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Top Gun: Maverick"], fiveDaysAfter, 1900, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Inception"], fiveDaysAfter, 2230, 16, 13);
        createMovie(halls["4DX"], movies["Doctor Strange"], fiveDaysAfter, 2000, 20, 17);
        createMovie(halls["4DX"], movies["Spider-Man: No Way Home"], fiveDaysAfter, 2230, 20, 17);

        console.log('shit created 5 days in advance for Sunday!');
    } else if (dayOfweek === 1) { // MONDAY
        createMovie(halls["2D-A"], movies["Shrek"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-A"], movies["Shrek 2"], fiveDaysAfter, 1830, 12, 10);
        createMovie(halls["2D-A"], movies["Spider-Man: Homecoming"], fiveDaysAfter, 2100, 12, 10);
        createMovie(halls["2D-B"], movies["Space Jam"], fiveDaysAfter, 1730, 12, 10);
        createMovie(halls["2D-B"], movies["Top Gun: Maverick"], fiveDaysAfter, 2000, 12, 10);
        createMovie(halls["2D-B"], movies["Fight Club"], fiveDaysAfter, 2230, 12, 10);
        createMovie(halls["2D-C"], movies["SpongeBob"], fiveDaysAfter, 1630, 12, 10);
        createMovie(halls["2D-C"], movies["Doctor Strange"], fiveDaysAfter, 1845, 12, 10);
        createMovie(halls["2D-C"], movies["Interstellar"], fiveDaysAfter, 2130, 12, 10);
        // createMovie(halls["IMAX 3D"], movies["Shrek"], fiveDaysAfter, 1630, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Shrek"], fiveDaysAfter, 1900, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Doctor Strange"], fiveDaysAfter, 2130, 16, 13);
        createMovie(halls["4DX"], movies["Doctor Strange"], fiveDaysAfter, 1930, 20, 17);
        createMovie(halls["4DX"], movies["Top Gun: Maverick"], fiveDaysAfter, 2200, 20, 17);

        console.log('shit created 5 days in advance for Monday!');
    } else if (dayOfweek === 2) { // TUESDAY
        createMovie(halls["2D-A"], movies["SpongeBob"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-A"], movies["Top Gun: Maverick"], fiveDaysAfter, 1800, 12, 10);
        createMovie(halls["2D-A"], movies["Doctor Strange"], fiveDaysAfter, 2030, 12, 10);
        // createMovie(halls["2D-B"], movies["Space Jam"], fiveDaysAfter, 1730, 12, 10);
        createMovie(halls["2D-B"], movies["Top Gun: Maverick"], fiveDaysAfter, 2030, 12, 10);
        createMovie(halls["2D-B"], movies["Pulp Fiction"], fiveDaysAfter, 2230, 12, 10);
        // createMovie(halls["2D-C"], movies["SpongeBob"], fiveDaysAfter, 1630, 12, 10);
        createMovie(halls["2D-C"], movies["Spider-Man: No Way Home"], fiveDaysAfter, 1900, 12, 10);
        createMovie(halls["2D-C"], movies["Inception"], fiveDaysAfter, 2130, 12, 10);
        createMovie(halls["IMAX 3D"], movies["Space Jam"], fiveDaysAfter, 1630, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Doctor Strange"], fiveDaysAfter, 1900, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Top Gun: Maverick"], fiveDaysAfter, 2130, 16, 13);
        createMovie(halls["4DX"], movies["Top Gun: Maverick"], fiveDaysAfter, 1930, 20, 17);
        createMovie(halls["4DX"], movies["Doctor Strange"], fiveDaysAfter, 2200, 20, 17);

        console.log('shit created 5 days in advance for Tuesday!');
    } else if (dayOfweek === 3) { // WEDNESDAY
        createMovie(halls["2D-A"], movies["Space Jam"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-A"], movies["Shrek 2"], fiveDaysAfter, 1800, 12, 10);
        createMovie(halls["2D-A"], movies["Justice League"], fiveDaysAfter, 2045, 12, 10);
        // createMovie(halls["2D-B"], movies["Space Jam"], fiveDaysAfter, 1730, 12, 10);
        createMovie(halls["2D-B"], movies["Top Gun: Maverick"], fiveDaysAfter, 2030, 12, 10);
        createMovie(halls["2D-B"], movies["A Star Is Born"], fiveDaysAfter, 2230, 12, 10);
        // createMovie(halls["2D-C"], movies["SpongeBob"], fiveDaysAfter, 1630, 12, 10);
        createMovie(halls["2D-C"], movies["Spider-Man: Far from Home"], fiveDaysAfter, 1900, 12, 10);
        createMovie(halls["2D-C"], movies["The Dark Knight"], fiveDaysAfter, 2130, 12, 10);
        createMovie(halls["IMAX 3D"], movies["Shrek"], fiveDaysAfter, 1630, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Top Gun: Maverick"], fiveDaysAfter, 1900, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Doctor Strange"], fiveDaysAfter, 2130, 16, 13);
        createMovie(halls["4DX"], movies["Doctor Strange"], fiveDaysAfter, 1930, 20, 17);
        createMovie(halls["4DX"], movies["Top Gun: Maverick"], fiveDaysAfter, 2200, 20, 17);

        console.log('shit created 5 days in advance for Wednesday!');
    } else if (dayOfweek === 4) { // THURSDAY

    } else if (dayOfweek === 5) { // FRIDAY
        createMovie(halls["2D-A"], movies["Shrek"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-A"], movies["SpongeBob"], fiveDaysAfter, 1830, 12, 10);
        createMovie(halls["2D-A"], movies["Top Gun: Maverick"], fiveDaysAfter, 2100, 12, 10);
        createMovie(halls["2D-B"], movies["Shrek 2"], fiveDaysAfter, 1730, 12, 10);
        createMovie(halls["2D-B"], movies["Justice League"], fiveDaysAfter, 2000, 12, 10);
        createMovie(halls["2D-B"], movies["Top Gun: Maverick"], fiveDaysAfter, 2230, 12, 10);
        createMovie(halls["2D-C"], movies["Doctor Strange"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-C"], movies["Space Jam"], fiveDaysAfter, 1830, 12, 10);
        createMovie(halls["2D-C"], movies["A Star Is Born"], fiveDaysAfter, 2100, 12, 10);
        createMovie(halls["IMAX 3D"], movies["Top Gun: Maverick"], fiveDaysAfter, 1900, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Doctor Strange"], fiveDaysAfter, 2230, 16, 13);
        createMovie(halls["4DX"], movies["Doctor Strange"], fiveDaysAfter, 2000, 20, 17);
        createMovie(halls["4DX"], movies["Spider-Man: No Way Home"], fiveDaysAfter, 2230, 20, 17);

        console.log('shit created 5 days in advance for Friday!');
    } else if (dayOfweek === 6) { // SATURDAY

    } else {
        return console.log('autoCreateProjectionsFiveDaysInAdvance failed!!!');
    }

}

module.exports = {
    autoCreateProjectionsInAdvance,
}