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

setTimeout(function() {
    console.log('aici dupa o secunda')
}, 1000)

setInterval(function() {
    console.log('aici LA FIECARE secunda')
}, 1000) // valoare exprimata in ms 1000ms = 1s 

console.log(`acum - `, new Date())

// functiile din acest fisier se pot inlocui cu cele pe care le veti face voi
// sunt doar ca sa aveti cateva lucruri de la care sa porniti