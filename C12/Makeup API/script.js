let produs = document.getElementsByClassName("produs");
let pret = document.getElementsByClassName("pret");
let poza = document.getElementsByClassName("poza");
let descriere = document.getElementsByClassName("descriere");

let produs1 = document.getElementsByClassName("produs1");
let pret1 = document.getElementsByClassName("pret1");
let poza1 = document.getElementsByClassName("poza1");
let descriere1 = document.getElementsByClassName("descriere1");

let produs2 = document.getElementsByClassName("produs2");
let pret2 = document.getElementsByClassName("pret2");
let poza2 = document.getElementsByClassName("poza2");
let descriere2 = document.getElementsByClassName("descriere2");

let brands = ["maybelline", "NYX", "Dior"];
let produse = [produs, produs1, produs2];
let preturi = [pret, pret1, pret2];
let poze = [poza, poza1, poza2];
let descrieri = [descriere, descriere1, descriere2];


function getDataFromAPI() {
    for(let i=0; i<3; i++) {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + brands[i])
        .then(res=>res.json())
        .then(json=>{
            console.log(json); 
            for(let j=0; j<4; j++) {
                produse[i][j].innerHTML = json[j].name;
                preturi[i][j].innerHTML = json[j].price;
                preturi[i][j].href = json[j].product_link;
                poze[i][j].src = json[j].image_link;
                descrieri[i][j].innerHTML = json[j].description;
            }
        })
    }
}





/*
function getDataFromAPI() {
    Maybelline();
    NYX();
    Dior();
}

 function Maybelline() {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        for(i=0; i<4; i++) {
            produs[i].innerHTML = json[i].name;
            poza[i].src = json[i].image_link;
            pret[i].innerHTML = json[i].price;
            pret[i].href = json[i].product_link;
            descriere[i].innerHTML = json[i].description;
    
        }

    })
}



function NYX() {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=NYX")
    .then(res=>res.json())
    .then(json=>{
        console.log(json);


        for(i=0; i<4; i++) {
            produs1[i].innerHTML = json[i].name;
            poza1[i].src = json[i].image_link;
            pret1[i].innerHTML = json[i].price;
            pret1[i].href = json[i].product_link;
            descriere1[i].innerHTML = json[i].description;
    
        }
    })
}



function Dior() {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=Dior")
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        
        for(i=0; i<4; i++) {
            produs2[i].innerHTML = json[i].name;
            poza2[i].src = json[i].image_link;
            pret2[i].innerHTML = json[i].price;
            pret2[i].href = json[i].product_link;
            descriere2[i].innerHTML = json[i].description;
    
        }
    })
}
*/