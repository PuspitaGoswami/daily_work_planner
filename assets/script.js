$(document).ready(function () {
  //Get the current date
  var currentDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDate);

  // Get the current hour using moment.js
  var currentHour = moment().format('hA');
  //console.log(currentHour);
  

  var timeBlocks = $(".time-block");
  
  for (var i = 0; i < timeBlocks.length; i++) {
    var blockHour = timeBlocks[i].children[0].textContent;
    //console.log(blockHour);
    if (blockHour < currentHour) {
      timeBlocks[i].classList.add("past");
    } else if (blockHour === currentHour) {
      timeBlocks[i].classList.add("present");
    } else {
      timeBlocks[i].classList.add("future");
    }
  }
  //Save button Clicked
  var submit = $(".saveBtn");
  submit.on("click", () => {
    var description = $(".description").val();
    localStorage.setItem("description", JSON.stringify(description));
  });
});
