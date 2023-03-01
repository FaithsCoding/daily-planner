var now = dayjs();

//formats the data into day, month, year & time
$("#currentDay").text(now.format("dddd, MMMM D YYYY, h:mm "));

function changeColor() {
  var currentTime = dayjs().hour();
  console.log("current time" + currentTime);

  $(".input").each(function () {
    var scheduledTime = parseInt($(this).parent().attr("id"));
    console.log(scheduledTime);
    if (currentTime > scheduledTime) {
      //$(this).removeClass("future");
      //$(this).removeClass("present");
      $(this).addClass(".past");
    } else if (currentTime < scheduledTime) {
      // $(this).removeClass("present");
      // $(this).removeClass("past");
      $(this).addClass(".future");
    } else {
      // $(this).removeClass("future");
      //$(this).removeClass("past");
      $(this).addClass(".present");
    }
  });
}

function renderText() {
  var saveEventText8 = JSON.parse(localStorage.getItem("8:00 am"));
  $("#08").val(saveEventText8);

  var saveEventText9 = JSON.parse(localStorage.getItem("9:00 am"));
  $("#09").val(saveEventText9);

  var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#10").val(saveEventText10);

  var saveEventText11 = JSON.parse(localStorage.getItem("11:00 am"));
  $("#11").val(saveEventText11);

  var saveEventText12 = JSON.parse(localStorage.getItem("12:00 pm"));
  $("#12").val(saveEventText12);

  var saveEventText1 = JSON.parse(localStorage.getItem("1:00 pm"));
  $("#13").val(saveEventText1);

  var saveEventText2 = JSON.parse(localStorage.getItem("2:00 pm"));
  $("#14").val(saveEventText2);

  var saveEventText3 = JSON.parse(localStorage.getItem("3:00 pm"));
  $("#15").val(saveEventText3);

  var saveEventText4 = JSON.parse(localStorage.getItem("4:00 pm"));
  $("#16").val(saveEventText4);

  var saveEventText5 = JSON.parse(localStorage.getItem("5:00 pm"));
  $("#17").val(saveEventText5);
}

var eventText;
var eventTime;

$(".saveBtn").click(function () {
  eventText = $(this).siblings("input").val();
  console.log(eventText);
  eventTime = $(this).parent().attr("id");
  console.log(eventTime);
  localStorage.setItem(eventTime, JSON.stringify(eventText));

  changeColor();
  renderText();
});

$(".clearBtn").click(function () {
  eventText = $(this).siblings(".input").val("");
  eventText = $(this).siblings(".input").val();
  eventTime = $(this).siblings(".hour").text();

  localStorage.setItem(eventTime, JSON.stringify(eventText));

  changeColor();
  renderText();
});

$(document).ready(function () {
  changeColor();
  renderText();
});
