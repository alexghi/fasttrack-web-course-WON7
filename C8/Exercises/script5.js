/*
var table = document.getElementById("sampleTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
*/

function insert_Row(){
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "Cell1";
    cell2.innerHTML = "Cell2";
    cell3.innerHTML = "Cell3";
    cell4.innerHTML = "Cell4";
}