//This functions asks JS to wait until the HTML has fully loaded to run the following script
$(document).ready(function () {
  //formats the data into day, month, year & time
  $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY "));

  //This button is used to save the information inputed into the text area
    $(".saveBtn").click(function () {
      var eventText = $(this).siblings("textarea").val();
      console.log(eventText);
      var eventTime = $(this).parent().attr("id");
      console.log(eventTime);
      localStorage.setItem(eventTime, eventText);
    });

    //This function tells JS which class to add depedning on the hour
    //If the time is before the current hour the box will be filled grey
    //If the time is the current hour it will be filled pink
    //If the tiime is an hour in the future then it will be green
    function changeColor() {
      var currentTime = dayjs().hour();
      $(".time-block").each(function () {
        var scheduledTime = parseInt($(this).attr("id").split("-")[1]);
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
    }
    changeColor();

    //The below script saves each input and value to the local storage
    $("#hour-08 textarea").val(localStorage.getItem("hour-08"));
    $("#hour-09 textarea").val(localStorage.getItem("hour-09"));
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
    $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
    $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
    $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
    $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"));
    $("#hour-18 textarea").val(localStorage.getItem("hour-18"));
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"));

    // I have added the clear button so the user can clear the whole schedule for the day should they need to
    // The window.location.reload allows the user to reload the page without losing their input $(".clearBtn").click(function () {
      $(".clearBtn").click(function () {
        localStorage.clear();
        window.location.reload();
      });
  });
