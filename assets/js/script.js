// GLOBAL VARIABLES
// THIS CORRESPONDS TO WHERE CURRENT TIME TICKER WILL DISPLAY IN HTML/ ON PAGE

var timeDisplay = $('#currentTick'); 

// DISPLAY CURRENT DATE & TIME IN HEADER (FORMAT MUST BE EX. SEP 16, 2023 at 2:15:22am -- STARTED CODE SUGGESTED hh:mm:ss BUT I THINK 02:15:22am LOOKS WEIRD)

function showTime() {
  var rightNow = dayjs().format("MMM DD, YYYY [at] h:mm:ss a");
  timeDisplay.text(rightNow);
}

showTime();
setInterval(showTime, 1000);

// SET SAVE BUTTONS AND STORE USER INPUT TO LOCAL STORAGE

$(".saveBtn").on('click', function () {
  var description = $(this).siblings(".description").val();
  var inputTime = $(this).parent().attr("id").split("-")[1];
  
  localStorage.setItem(inputTime, description);
  
});

// ASSIGN ROW COLOR BASED ON TIME-FROM-NOW

$(".time-block").each(function () {
  let timeHour = dayjs().format("HH");
  let rowHour = parseInt($(this).attr("id").split("-")[1]);

  if (rowHour == timeHour) {
    $(this).addClass("present");
  } else if (rowHour > timeHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

// PULL VALUES FROM LOCAL STORAGE

$("#hour-8 .description").val(localStorage.getItem("8"));
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));

// CONSOLE LOG AND TEST IN-APP TO SEE IF INPUT IS SAVED TO LOCAL STORAGE

console.log(localStorage);

// OPTION TO CLEAR LOCAL STORAGE

$(".clearBtn").click(function () {
  $(".description").val("");

  localStorage.clear();
});

// CLEARED LOCAL STORAGE AND ABOVE CONSOLE LOG SHOWED IT AS EMPTY! :)