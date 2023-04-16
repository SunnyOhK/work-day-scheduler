// GLOBAL VARIABLES

var timeDisplay = $('#currentDay'); 


// DISPLAY CURRENT DATE & TIME IN HEADER

let timeShow = $("#currentDay");

function showTime() {
  let rn = dayjs().format(
    "MMM DD, YYYY [at] hh:mm:ss a"
  );
  timeShow.text(rn);
}

showTime();
setInterval(showTime, 1000);

// SET SAVE BUTTONS AND STORE USER INPUT TO LOCAL STORAGE

$(".saveBtn").click(function () {
  let description = $(this).siblings(".description").val();
  
  let inputTime = $(this).parent().attr("id").split("-")[1];
  
  localStorage.setItem(inputTime, description);
  
});

// ASSIGN ROW COLOR BASED ON TIME-FROM-NOW

$(".time-block").each(function () {
  let hourHour = dayjs().format("HH");
  let rowHour = parseInt($(this).attr("id").split("-")[1]);

  if (rowHour === hourHour) {
    $(this).addClass("present");
  } else if (rowHour > hourHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

$("#hour-08 .description").val(localStorage.getItem("08"));
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));

// OPTION TO CLEAR LOCAL STORAGE

$(".clearBtn").click(function () {
  $(".description").val("");

  localStorage.clear();
});