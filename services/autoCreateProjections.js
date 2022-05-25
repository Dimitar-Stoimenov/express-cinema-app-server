const { createMovie } = require("./autoCreateProjectionsLogic")

const movies = {
    "The Dark Knight": "6283a6deccef9353b7bce251",
    "Shrek": "6283e28b90bd32f5df86fb89",
    "Inception": "6283f47c8894d98659d3a268",
    "Interstellar": "6283f54e8894d98659d3a26e",
    "Justice League": "6283f7998894d98659d3a275",
    "Doctor Strange": "6283f9498894d98659d3a280",
}

const halls = {
    "IMAX 3D": "6284f1239c7c4c9c40d83758",
    "4DX": "6284f1d49c7c4c9c40d8375a",
    "2D-A": "6284f32b9c7c4c9c40d8375c",
    "2D-B": "6284f32d9c7c4c9c40d8375e",
    "2D-C": "6284f3309c7c4c9c40d83760",
}

const autoCreateProjectionsFiveDaysInAdvance = () => {
    const today = new Date();
    let fiveDaysAfter = new Date(today);
    fiveDaysAfter.setDate(today.getDate() + 5);
    let dayOfweek = fiveDaysAfter.getDay();

    if (dayOfweek === 0) { // SUNDAY

    } else if (dayOfweek === 1) { // MONDAY
        createMovie(halls["2D-A"], movies["Shrek"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-A"], movies["Justice League"], fiveDaysAfter, 1830, 12, 10);
        createMovie(halls["2D-A"], movies["Inception"], fiveDaysAfter, 2100, 12, 10);
        createMovie(halls["2D-B"], movies["Shrek"], fiveDaysAfter, 1730, 12, 10);
        createMovie(halls["2D-B"], movies["Justice League"], fiveDaysAfter, 2000, 12, 10);
        createMovie(halls["2D-B"], movies["Interstellar"], fiveDaysAfter, 2230, 12, 10);
        createMovie(halls["2D-C"], movies["Doctor Strange"], fiveDaysAfter, 1600, 12, 10);
        createMovie(halls["2D-C"], movies["Shrek"], fiveDaysAfter, 1830, 12, 10);
        createMovie(halls["2D-C"], movies["Doctor Strange"], fiveDaysAfter, 2100, 12, 10);
        createMovie(halls["IMAX 3D"], movies["Doctor Strange"], fiveDaysAfter, 1900, 16, 13);
        createMovie(halls["IMAX 3D"], movies["Inception"], fiveDaysAfter, 2230, 16, 13);
        createMovie(halls["4DX"], movies["Doctor Strange"], fiveDaysAfter, 2000, 20, 17);
        createMovie(halls["4DX"], movies["The Dark Knight"], fiveDaysAfter, 2230, 20, 17);
        
        console.log('shit created 5 days in advance for Monday!');
    } else if (dayOfweek === 2) { // TUESDAY

    } else if (dayOfweek === 3) { // WEDNESDAY

    } else if (dayOfweek === 4) { // THURSDAY

    } else if (dayOfweek === 5) { // FRIDAY

    } else if (dayOfweek === 6) { // SATURDAY

    } else {
        return console.log('autoCreateProjectionsFiveDaysInAdvance failed!!!');
    }

}

module.exports = {
    autoCreateProjectionsFiveDaysInAdvance,
}