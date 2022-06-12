let button = document.getElementById("startButton");
let orar = document.getElementById("orar");
let minutar = document.getElementById("minutar");
let secundar = document.getElementById("secundar");



function startStopwatch() {
    orar.style.transform = "rotate(-90deg)";
    minutar.style.transform = "rotate(-90deg)";
    secundar.style.transform = "rotate(-90deg)";

    let unghi = -90;
    let pas = 6;

    let myTimer = setInterval(() => {
        unghi = unghi + pas;
        secundar.style.transform = "rotate(" + unghi + "deg)";

        if(unghi==270) {
            clearInterval(myTimer)
        }

    }, 1000);
}