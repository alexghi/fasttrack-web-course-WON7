/* 
sa ne gandim
- avem de facut un cerc
- avem de reprezentat valorile orelor, minutelor si secundelor pe acel cerc
- intr-o ora avem 60 de minute
- stim ca avem in Javascript Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- stim ca avem functia setTimeout
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
care ce face? 
primeste ca prim parametru o functie care se va autoinvoca (se va apela) dupa un interval pe care noi il stabilim
in al doilea parametru
setInterval, se apeleaza la fiecare ms
*/

<<<<<<< HEAD
setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function startStopWatch() {
    var date = new Date ();   
    var startClockId = setInterval(() => {  
      date.setSeconds(date.getSeconds() + 1)
    }, 1000);
    let number = parseInt(document.getElementById("number").value);
    setTimeout(function () {
      clearInterval(startClockId);
    }, number * 1000);
    console.log(typeof(number));
    console.log(document.getElementById("number").value);
    console.log(number);
  }
=======
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");
const hourHand = document.querySelector(".hour");

function clock() {
    const date = new Date();
    const secDeg = (date.getSeconds() / 60) * 360 - 90;
    const minDeg = (date.getMinutes() / 60) * 360 - 90;
    const hourDeg = (date.getHours() / 12) * 360 - 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }

setInterval(clock, 1000);

clock()

// functiile din acest fisier se pot inlocui cu cele pe care le veti face voi
// sunt doar ca sa aveti cateva lucruri de la care sa porniti
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd
