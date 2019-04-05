
$(document).ready(function () {

  $('.info-row').hide();
  $('.info-row1').hide();
  $('.info-row2').hide();

});

  //Variables
  var Task = "";
  var activity = "";
  var result = "";
  var addedInfo = "";
  var extraInfo = "";
  var number = "";
  var reason = "";
  var pname = "";
  var cname = "";
  

  // Task Function - Conditions
  function mytaskFunction() {
    var mylist = document.getElementById("mytaskList");
    var valueT = mylist.options[mylist.selectedIndex].value
    Task = mylist.options[mylist.selectedIndex].value + ": " + mylist.options[mylist.selectedIndex].text;

    if (valueT === "EN310" || valueT === "EN410") {
      $('.info-row').show();
      $('.info-row1').show();
      $(".empty-div").text("Please Fill In the number of Pages");
      $(".empty-div1").text("Please Fill In the Report Title");
      number = document.getElementById('userinput').value;
      addedInfo = document.getElementById('userinput1').value;
      result = "Report Title: " + addedInfo + "; Number of Report Pages: " + number  ;
    }
    else if (valueT === "EN510") {
      $('.info-row').show();
      $('.info-row1').show();
      $('.info-row2').show();
      $(".empty-div").text("Please Fill In the number of hours");
      $(".empty-div1").text("From");
      $(".empty-div2").text("To");
      number = document.getElementById('userinput').value;
      addedInfo = document.getElementById('userinput1').value;
      extraInfo = document.getElementById('userinput2').value;
      result = "Number of Travel Time(h): " + number + "; From: " + addedInfo + " To: " + extraInfo;
    }
    else if (valueT === "EN110" || valueT === "EN120" || valueT === "EN130") {
      $('.info-row').show();
      $('.info-row1').show();
      $('.info-row2').show();
      $(".empty-div").text("Reason of Contact/Topic");
      $(".empty-div1").text("Person's Name");
      $(".empty-div2").text("Contact Company's Name");
      reason = document.getElementById('userinput').value;
      pname = document.getElementById('userinput1').value;
      cname = document.getElementById('userinput2').value;
      result = "Contacted " + pname + " From " + cname + "; Topic: " + reason;
    }
    else if (valueT === "EN210" || valueT === "EN230" || valueT === "EN240") {
      $('.info-row').show();
      $(".empty-div").text("Please Fill In address/location");
      number = document.getElementById('userinput').value;
      result = "Inspection/Investigation Location: " + number;
    }
    else {
      $('.info-row').hide();
      $('.info-row1').hide();
      $('.info-row2').hide();
      $(".empty-div").text("");
      $(".empty-div1").text("");
      $(".empty-div2").text("");
    }
  }

  // Activity Function - Conditions
  function myactivityFunction() {
    var mylist = document.getElementById("myactivityList");
    var valueA = mylist.options[mylist.selectedIndex].value
    activity = mylist.options[mylist.selectedIndex].value + ": " + mylist.options[mylist.selectedIndex].text;

    if (valueA === "A103") {
      $('.info-row').show()
      $('.info-row1').show()
      $(".empty-div").text("Please Fill In the number of Reviwed Pages")
      $(".empty-div1").text("Please Fill In the Reviwed Report Title")
      number = document.getElementById('userinput').value;
      addedInfo = document.getElementById('userinput1').value;
      result = "Number of Report Pages: " + number + "; Report Title: " + addedInfo;
    }
  }


function generate() {
  mytaskFunction()
  myactivityFunction()
  $('#CommentArea').html(Task + "\n" + activity + "\n" + result)
}

function CopyText() {
  var copyText = document.getElementById("CommentArea");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}








