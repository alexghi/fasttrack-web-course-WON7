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
/*
setTimeout(function() {
    console.log('aici dupa o secunda')
}, 1000)

setInterval(function() {
    console.log('aici LA FIECARE secunda')
}, 1000) // valoare exprimata in ms 1000ms = 1s 

console.log(`acum - `, new Date())
*/
// functiile din acest fisier se pot inlocui cu cele pe care le veti face voi
// sunt doar ca sa aveti cateva lucruri de la care sa porniti

const minuteEl = document.querySelector(".minute--hand");
const secondEl = document.querySelector(".second--hand");
const hourEl = document.querySelector(".hour--hand");

function setDate(){
    const now = new Date;
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360)+90;
    secondEl.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const mindDegrees = ((mins/60)*360)+((seconds/60)*6)+90;
    minuteEl.style.transform = `rotate(${mindDegrees})`;

    const hour = now.getHours();
    const hourDegrees = ((hour /12)*360)+((mins/60)*30)+90;
    hourEl.style.transform = `rotate(${hourDegrees}deg)`;

} 
setInterval(setDate,1000);
setDate();




