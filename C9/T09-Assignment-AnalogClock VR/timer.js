

let secondHand = document.querySelector(".second");
let minHand = document.querySelector(".minute");
let hourHand = document.querySelector(".hour");

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

    // secondHand.style.transform = "rotate(" + getSeconds * 360 + "deg)";
    // document.getElementById("timerOutputSec").innerHTML = seconds;

   
}
const myTimerInterval = setInterval(timerOn, 1000);

function timerStop() {
    clearInterval(myTimerInterval);
}

function timerReset() {
    seconds = 0
    secondHand.style.transform = "rotate(" + 0 * 360 + "deg)";
    minHand.style.transform = "rotate(" + 0 * 360 + "deg)";
    hourHand.style.transform = "rotate(" + 0 * 360 + "deg)";
    document.querySelector("#timerOutput").innerHTML = `0:0:0`
}

