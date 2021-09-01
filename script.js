//Calculate Results
function compute()
{
   p = document.getElementById("principal").value;
   r = document.getElementById("rate").value;
   y = document.getElementById("years").value;
   result = document.getElementById("result").value;

   var year = new Date().getFullYear();
   
   document.getElementById("result").innerHTML = 
   "If you deposit" + " " + p + "<br/>" +
   "At an interest of " + " " + r + "<br/>" +

   "You will receive" + " " + (p*r*y/100);
  
}
        