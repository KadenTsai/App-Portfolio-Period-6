function convertTemperature() {

  var getChoice = getText('temp');
  var temp = getText('temperature');

  if (getChoice == "toF") {
  calculateToF(temp);
  } else {
  calculateToC(temp);
  }
  
}

function calculateToF(c) {

  var f = (9*c+(32*5))/5 ;
  document.getElementById('result').innerHTML = "Farenheit: " + f;
}

function calculateToC(f) {

  var c = (5*(f-32))/9;
  document.getElementById('result').innerHTML = "Celsius: " + c;
}

  function getText(id){
      return document.getElementById(id).value;
    }