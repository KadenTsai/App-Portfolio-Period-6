function countChange() {
var quarters = getNumber("quarters");
var dimes = getNumber("dimes");
var nickels = getNumber("nickels");
var pennies = getNumber("pennies");
var total = (quarters * 0.25) + (dimes * 0.1) + (nickels * 0.05) + (pennies * 0.01);
  setText("result", "$"+total.toFixed(2));
   
}

function getNumber(id) {
  return parseInt(document.getElementById(id).value);
}

function setText(id, value) {
  document.getElementById(id).innerHTML = value;
}