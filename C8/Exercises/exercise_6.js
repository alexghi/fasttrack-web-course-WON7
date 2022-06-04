function changeContent(){
   const row = window.prompt("Row number(0,1,2)", "0");
   const column = window.prompt("Column number(0,1)", "0");
   const content = window.prompt("Cell content");
   var x = document.getElementById('myTable').rows[parseInt(row,10)].cells;
   x[parseInt(column,10)].innerHTML=content;
}