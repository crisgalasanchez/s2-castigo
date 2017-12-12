'use strict';

function bucle(){
	for (var i = 0; i < 10; i++) {
		phrase.innerHTML += "He aprendido bien cómo funcionan los bucles" + colors + "<br>";
    colors.innerHTML += colorsValue;
	}
}
var phrase = document.getElementById('phraseLoop');
var colors = document.getElementById('colors').value;
//var colorsValue = colors.options[colors].value;

console.log(colorsValue);
bucle();
