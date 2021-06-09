var today = moment();
// $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ass "));

function timeOfDay() {
    currentDay = setInterval(function() {

        today = moment();
        $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));


    }, 1000);
}

timeOfDay();

function paspresfut(hour) {
    var currentTime = today.format("H");
    if (hour < currentTime) {
        return "past";
    } else if (hour > currentTime) {
        return "future";
    } else {
        return "present";
    }

}
var textUpload = JSON.parse(localStorage.getItem("storageBox")) || ["", "", "", "", "", "", "", "", "", ""];
var containerEl = $(".container");
// console.log(containerEl);
for (var i = 0; i < 10; i++) {
    containerEl.append(
        `<div class="row hour">
    
    <div class="col-1">
        ${moment(i + 9 , "H").format("ha")}

    </div>
    
    <textarea class="col-10 ${paspresfut(i + 9)}" id ="${i}-text-space">
    ${textUpload[i]}
    

    </textarea>
    
    <div class="col-1 saveBtn">
    
                </div>`)
};






// var possibleHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
// var containerEl = $(".container");
// for (var i = 0; i < possibleHours.length; i++) {

//     var currentHour = possibleHours[i];
//     var display = currentHour > 12 ? currentHour - 12 : currentHour;
//     var amPm = currentHour >= 12 ? "pm" : "am";
//     var localStorageValue = window.localStorage.getItem(`planner-hour-${currentHour}`) || "";
//     var row = $("<div class = 'row hours-calander'></div>");
//     var time = $("<div class = 'col-1'></div>");
//     time.attr("id", currentHour);
//     time.text(display + amPm);
//     var textArea = $("<textarea class ='col-10'></textarea>");
//     textArea.val(localStorageValue);
//     var button = $("<button class = 'col-1'></button>");
//     button.append("<i class = 'fasfa-save'> </i>");
//     button.click(function(event) {
//         saveButton(event, textArea.val(), currentHour);
//     })
//     row.append(time).append(textArea).append(button);
//     containerEl.append(row)



// }

// function saveButton(event, newValue, hour) {
//     event.preventDefault();
//     window.localStorage.setItem(`planner-hour-${hour}`, newValue);


// }

// console.log(test);