let imagine = document.getElementById("imagine");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let descriere = document.getElementById("descriere");
let number = document.getElementById("number");

let descrieri = ["descriere1", "descriere2", "descriere3", "descriere4", "descriere5"];

var index = 1;

function inainte() {
    if(index==5) {
        index = 1;
    } else {
        index = index + 1;
    }

    descriere.innerHTML = descrieri[index-1];
    number.innerHTML = index + "/5";
    imagine.src = "imagine" + index + ".jpg";
}

function inapoi() {
    if(index==1) {
        index = 5;
    } else {
        index = index - 1;
    }

    descriere.innerHTML = descrieri[index-1];
    number.innerHTML = index + "/5";
    imagine.src = "imagine" + index + ".jpg";
}