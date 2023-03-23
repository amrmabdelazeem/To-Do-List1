//jshint esversion:6

//module

//no () added here as we use it only when we want the function to run. Here we're simplly just exporting it. 
exports.getDate = function() {

    const today = new Date();

    const options = { weekday: "long", month: "long", day: "numeric" };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}

exports.getDay = function() {

    const today = new Date();

    const options = { weekday: "long"};

    let day = today.toLocaleDateString("en-US", options);

    return day;
}
