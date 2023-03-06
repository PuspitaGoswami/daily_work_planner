$(document).ready(function () {
  //Get the current date
  var currentDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDate);

  // Get the current hour using moment.js
  var currentHour = moment().format('hA');
  var currentHour24 = moment(currentHour, 'ha').hour();
  //console.log(currentHour);
  

  var timeBlocks = $(".time-block");
  
  for (var i = 0; i < timeBlocks.length; i++) {
    var blockHour = timeBlocks[i].children[0].textContent;
    var blockHour24 = moment(blockHour, 'ha').hour();
    if (blockHour24 < currentHour24) {
      timeBlocks[i].classList.add("past");
    } else if (blockHour24 === currentHour24) {
      timeBlocks[i].classList.add("present");
    } else {
      timeBlocks[i].classList.add("future");
    }
      // Retrieve saved event data for this timeblock
      var savedData = localStorage.getItem("timeBlock" + i);
      if (savedData) {
        $(timeBlocks[i]).find(".description").val(savedData);
      }
  }
  //Save button Clicked
  var submit = $(".saveBtn");
  submit.on("click", function() {
    // Get the index of the time block
    var index = $(this).closest(".time-block").index();
    // Get the description from the input field
    var description = $(this).siblings(".description").val();
    // Save the description in local storage
    localStorage.setItem("timeBlock" + index, description);
  });
});
