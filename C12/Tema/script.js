let city = document.getElementById("city");
let Weather = document.getElementById("Weather");
let Minim = document.getElementsByClassName("min");
let Maxim = document.getElementsByClassName("max");
let days = document.getElementsByClassName("dayName");
let unitate = "c";
let continut = document.getElementById("continut");
let cButton = document.getElementById("cButton");
let fButton = document.getElementById("fButton");
let poze = document.getElementsByClassName("poza");

 cButton.disabled=true;

function showWeather() {
    fetch("https://weatherdbi.herokuapp.com/data/weather/" + city.value)
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        for(let i=0; i<7; i++){
            days[i].innerHTML = json.next_days[i].day;
            poze[i].src = json.next_days[i].iconURL;
            if(unitate=="c"){
                Minim[i].innerHTML =json.next_days[i].min_temp.c; 
                Maxim[i].innerHTML = json.next_days[i].max_temp.c;
            } else {
                Minim[i].innerHTML =json.next_days[i].min_temp.f; 
                Maxim[i].innerHTML = json.next_days[i].max_temp.f;
            }
        }  
        continut.style.visibility = "visible";
    });
}

function schimbareF() {
    unitate="f";
    fButton.disabled=true;
    cButton.disabled=false;
    showWeather();

}

function schimbareC() {
    unitate="c";
    cButton.disabled=true;
    fButton.disabled=false;
    showWeather();
}