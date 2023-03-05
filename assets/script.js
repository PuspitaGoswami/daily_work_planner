$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDate);

  // Get the current hour using moment.js
  var currentHour = moment().hours();

  // Loop over each time block
  $(".time-block").each(function () {
    // Get the hour for this time block by parsing the text of the span element
    var blockHour = parseInt($(this).find(".hour").text().trim().split(" ")[0]);

    // Add the appropriate class to the time block based on whether it represents a past, present, or future hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});
