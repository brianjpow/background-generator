var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var generate = document.getElementById("random");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var hexValue = document.querySelector("h4");

function setGradient  () {
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value + ", " 
  + color2.value + ")";

  css.textContent = body.style.background + ";";
  hexValue.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function pickColors  () {
  var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  var hex = "#" + "";
  var hex2 = "#" + "";
  var i;
  for (i = 0; i < 6; i++) {
    hex += values[Math.floor(Math.random()*values.length)];
    hex2 += values[Math.floor(Math.random()*values.length)];
  }
  color1.value = hex;
  color2.value = hex2;
  setGradient();
}

// function hexToR(h) {return parseInt((cutHex(h)).substing(0,2),16)}
// function hexToR(h) {return parseInt((cutHex(h)).substing(2,4),16)}
// function hexToR(h) {return parseInt((cutHex(h)).substing(4,6),16)}
// function cutHex(h) {if (h.charAt(0)=="#") {h.substring(1,7)} else return h};

onload = pickColors();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

generate.addEventListener("click", pickColors);