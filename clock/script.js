var deadline = new Date("Nov 3, 2020 7:00:00").getTime();


var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  // document.getElementById("demo").innerHTML = days + "d "
  // + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
  } else {
    document.querySelector("#numbers .days").innerHTML = days;
    document.querySelector("#numbers .hours").innerHTML = hours;
    document.querySelector("#numbers .minutes").innerHTML = String(minutes).padStart(2, "0");
    document.querySelector("#numbers .seconds").innerHTML = String(seconds).padStart(2,"0");

  }



}, 10);
