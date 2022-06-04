function createTable()
{
var rn = window.prompt("Input number of rows", 1);
const cn = window.prompt("Input number of columns",1);
var partseIntRn = parseInt(rn, 10);
  
 for(var r = 0; r < partseIntRn; r++)
  {
   var x = document.getElementById('myTable').insertRow(r);
   
   for(var c = 0; c < parseInt(cn, 10); c++)  
    {
     var y = x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 

    }
   }
}