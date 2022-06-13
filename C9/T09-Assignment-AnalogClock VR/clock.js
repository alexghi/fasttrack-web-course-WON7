//========================= CLOCK
let secondHand = document.querySelector(".second");
let minHand = document.querySelector(".minute");
let hourHand = document.querySelector(".hour");

const myClockInterval = setInterval(clockRotating, 1000);

function clockRotating() {
  var date = new Date();
  var getSeconds = date.getSeconds() / 60;
  var getMinutes = date.getMinutes() / 60;
  var getHours = date.getHours() / 12;

  secondHand.style.transform = "rotate(" + getSeconds * 360 + "deg)";
  minHand.style.transform = "rotate(" + getMinutes * 360 + "deg)";
  hourHand.style.transform = "rotate(" + getHours * 360 + "deg)";

  const days = ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"];
  const months = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"];
  var Day = days[date.getDay()]
  var Month = months[date.getMonth()];
  var DayInMonth = date.getDate();
  var Year = date.getFullYear();
  
  document.querySelector(".current-day-in-week").innerHTML = `${Day}`;  
  document.querySelector(".current-day").innerHTML = `${DayInMonth} ${Month} ${Year}`;
//   document.querySelector(".current-day").innerHTML = date.toDateString();
}

function clockStop() {
  clearInterval(myClockInterval);
}

//========================= TIMER

var seconds = 0;

function timerOn() {
  seconds++;
  console.log(seconds);
  
  const mySeconds = seconds / 60;
  const secondsToSubstract = (Math.floor(seconds / 60) * 60);
  const myMinutes = Math.floor(seconds / 60);
  const minutesToSubstract = (Math.floor(seconds / 3600) * 60);
  const myHours = Math.floor(seconds / 3600);
  
  secondHand.style.transform = "rotate(" + mySeconds * 360 + "deg)";
  minHand.style.transform = "rotate(" + myMinutes * 0.016 * 360 + "deg)";
  hourHand.style.transform = "rotate(" + myHours * 0.016 * 360 + "deg)";
  console.log('aici', mySeconds, myMinutes)
  
  document.querySelector("#timerOutput").innerHTML = `${myHours}:${myMinutes - minutesToSubstract}:${Math.floor(seconds) - secondsToSubstract}`;
}

const myTimerInterval = setInterval(timerOn, 1000);

function timerStop() {
    clearInterval(myTimerInterval);
    clockRotating();
}

function timerReset() {
    seconds = 0
    secondHand.style.transform = "rotate(" + 0 * 360 + "deg)";
    minHand.style.transform = "rotate(" + 0 * 360 + "deg)";
    hourHand.style.transform = "rotate(" + 0 * 360 + "deg)";
    document.querySelector("#timerOutput").innerHTML = `0:0:0`
}


// function timerOn() {
//   seconds++;
//   console.log(seconds)
 
//   const mySeconds = seconds / 60;
//   const myMinutes = Math.floor(seconds / 3600);
//   const myHours = Math.floor(seconds / 3600);
//   console.log('minutele ', myMinutes)
//   secondHand.style.transform = "rotate(" + mySeconds * 360 + "deg)";
//   minHand.style.transform = "rotate(" + myMinutes * 360 + "deg)";
//   hourHand.style.transform = "rotate(" + myHours * 360 + "deg)";
//   console.log('aici', mySeconds, myMinutes)
//   console.log('tot aici', mySeconds, myMinutes)
  
//   document.querySelector("#timerOutput").innerHTML = `${myHours}:${myMinutes}:${Math.floor(seconds)}`;   
// }


