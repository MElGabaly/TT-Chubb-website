




$(document).ready(function () {

  $('.info-row').hide()

});


// picking the selected task
var Task = "";

function mytaskFunction() {
  var mylist = document.getElementById("mytaskList");
  var value = mylist.options[mylist.selectedIndex].value
  Task = mylist.options[mylist.selectedIndex].value + ": " + mylist.options[mylist.selectedIndex].text;
  if (value === "EN310") {
    $('.info-row').show()
    $(".empty-div").text("Please Fill In the number of Pages")
  }
  else if (value === "EN510") {
    $('.info-row').show()
    $(".empty-div").text("Please Fill In the number of hours")
  }
  else {
    $('.info-row').hide()
    $(".empty-div").text("")
  }

}


var activity = "";
function myactivityFunction() {
  var mylist = document.getElementById("myactivityList");
  var value = mylist.options[mylist.selectedIndex].value
  activity = mylist.options[mylist.selectedIndex].value + ": " + mylist.options[mylist.selectedIndex].text;
  if (value === "A103") {
    $('.info-row').show()
    $(".empty-div").text("Please Fill In the number of Reviwed Pages")
  }
}

var numberofhours = "";
function myinputFunction() {
  numberofhours = document.getElementById('userinput').value;
  console.log (numberofhours)
}


function generate() {
  mytaskFunction()
  myactivityFunction()
  myinputFunction()
  $('#CommentArea').html(Task + "\n" + activity + "\n" + numberofhours)
}





