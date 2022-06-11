let secondHand = document.querySelector(".second");
let minHand = document.querySelector(".minute");
let hourHand = document.querySelector(".hour");

setInterval(clockRotating, 1000);

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
//   console.log(getMonth, getDay, getDate)
document.querySelector(".current-day-in-week").innerHTML = `${Day}`;  
document.querySelector(".current-day").innerHTML = `${DayInMonth} ${Month} ${Year}`;
//   document.querySelector(".current-day").innerHTML = date.toDateString();
}
