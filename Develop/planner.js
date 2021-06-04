var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var eleCurrentTime = $("#idCurrentTime");

console.log(eleCurrentTime);



function pageInitialize() {

    setInterval(() => {

        eleCurrentTime.text(moment().format('[The current time is ]MMMM Do YYYY, h:mm:ss a'));

    }, 1000);

}



pageInitialize();