dayjs();

//formats the data into day, month, year & time
$("currentDay").text.format("LLLL");

$(function changeColor() {
  var currentTime = dayjs.hours();
  console.log("current time" + currentTime);

  $(".input").each(function () {
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);
    if (currentTime > scheduledTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentTime < scheduledTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
});

$(function renderText() {
  var saveEventText8 = JSON.parse(localStorage.getItem("8:00 am"));
  $("#08").val("");
  $("#08").val(saveEventText8);

  var saveEventText9 = JSON.parse(localStorage.getItem("9:00 am"));
  $("#09").val("");
  $("#09").val(saveEventText9);

  var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#10").val("");
  $("#10").val(saveEventText10);

  var saveEventText11 = JSON.parse(localStorage.getItem("11:00 am"));
  $("#11").val("");
  $("#11").val(saveEventText11);

  var saveEventText12 = JSON.parse(localStorage.getItem("12:00 pm"));
  $("#12").val("");
  $("#12").val(saveEventText12);

  var saveEventText1 = JSON.parse(localStorage.getItem("1:00 pm"));
  $("#13").val("");
  $("#13").val(saveEventText1);

  var saveEventText2 = JSON.parse(localStorage.getItem("2:00 pm"));
  $("#14").val("");
  $("#14").val(saveEventText2);

  var saveEventText3 = JSON.parse(localStorage.getItem("3:00 pm"));
  $("#15").val("");
  $("#15").val(saveEventText3);

  var saveEventText4 = JSON.parse(localStorage.getItem("4:00 pm"));
  $("#16").val("");
  $("#16").val(saveEventText4);

  var saveEventText5 = JSON.parse(localStorage.getItem("5:00 pm"));
  $("#17").val("");
  $("#17").val(saveEventText5);
});

var eventText;
var eventTime;

$("saveBtn").click(function () {
  eventText = $(this).siblings("input").val();
  console.log(eventText);
  eventTime = $(this).siblings("hour").text();
  console.log(eventTime);
  localStorage.setItem(eventTime, JSON.stringify(eventText));

  colorChange();
  renderText();
});

$("clearBtn").click(function () {
  eventText = $(this).siblings(".input").val("");
  eventText = $(this).siblings(".input").val();
  eventTime = $(this).siblings(".hour").text();

  localStorage.setItem(eventTime, JSON.stringify(eventText));

  colorChange();
  renderText();
});

$(document).ready(function () {
  changeColor();
  renderText();
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page
