


// picking the selected task
function mytaskFunction() {
    var mylist = document.getElementById("mytaskList");
    var Task = mylist.options[mylist.selectedIndex].value + mylist.options[mylist.selectedIndex].text;
    console.log(Task)
  }

  function myactivityFunction() {
    var mylist = document.getElementById("myactivityList");
    var activity = mylist.options[mylist.selectedIndex].label;
    console.log(activity)
  }

