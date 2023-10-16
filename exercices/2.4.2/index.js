let redbox = document.getElementById("red-box");
let greenbox = document.getElementById("green-box");
let yellowbox = document.getElementById("yellow-box");
let timer;
let startTime;
const maxTime = 1;

window.addEventListener("click", start);

function start () {
  redbox.style.backgroundColor = "white";
  greenbox.style.backgroundColor = "white";
  yellowbox.style.backgroundColor = "white";
  timerReference = setTimeout(redLight, maxTime * 1000);
  
}

function redLight() {
  redbox.style.backgroundColor = "red";
  greenbox.style.backgroundColor = "white";
  yellowbox.style.backgroundColor = "white";
  timerReference = setTimeout(yellowLight, maxTime * 1000);
  
}

function yellowLight() {
  redbox.style.backgroundColor = "white";
  greenbox.style.backgroundColor = "white";
  yellowbox.style.backgroundColor = "orange";
  timerReference = setTimeout(greenLight, maxTime * 1000);
  
}

function greenLight() {
  redbox.style.backgroundColor = "white";
  greenbox.style.backgroundColor = "green";
  yellowbox.style.backgroundColor = "white";
  timerReference = setTimeout(redLight, maxTime * 1000);
  
}



