window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("header2").classList.remove("dismassively");
    document.getElementById("header2").classList.add("massivelydown"); 
    document.getElementById("header1").classList.remove("disthis");
    document.getElementById("header1").classList.add("thisdown");
  }
  else if (document.body.scrollTop < 350 || document.documentElement.scrollTop < 350) {
    document.getElementById("header2").classList.remove("massivelydown");
    document.getElementById("header2").classList.add("dismassively");
    document.getElementById("header1").classList.remove("thisdown");
    document.getElementById("header1").classList.add("disthis");
  }
}