var today = moment();
// $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ass "));

function timeOfDay() {
    currentDay = setInterval(function() {

        today = moment();
        $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));


    }, 1000);
}

timeOfDay();

// var containerEl = $(".container");
// console.log(containerEl);
// for (var i = 0; i < 10; i++)
//     containerEl.append(`


// `);