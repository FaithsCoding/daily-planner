function reload() {
  $(document).ready(function () {
    //formats the data into day, month, year & time
    $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY "));

    $(".saveBtn").click(function () {
      var eventText = $(this).siblings("textarea").val();
      console.log(eventText);
      var eventTime = $(this).parent().attr("id");
      console.log(eventTime);
      localStorage.setItem(eventTime, eventText);
    });

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

    $(".clearBtn").click(function () {
      localStorage.clear();
      window.location.reload();
    });
  });
}

setInterval(reload, 60000); // 60000 milliseconds = 1 minute
