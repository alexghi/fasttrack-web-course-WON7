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
var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for(var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock () {
    d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s= d.getSeconds(),
    hDeg = h * 30 + m *(360/720),
    mDeg = m * 6 + s * (360/3600),
    sDeg = s * 6,
    hEl = document.querySelector('.hour-hand'),
    mEl = document.querySelector('.minute-hand'),
    sEl = document.querySelector('.second-hand');
hEl.style.transform = "rotate("+hDeg+"deg)";
mEl.style.transform = "rotate("+mDeg+"deg)";
sEl.style.transform = "rotate("+sDeg+"deg)";
}

setInterval('clock()', 200)


// functiile din acest fisier se pot inlocui cu cele pe care le veti face voi
// sunt doar ca sa aveti cateva lucruri de la care sa porniti