'use strict';

var cad = "";
var phrase = document.getElementById('phraseLoop');
var select = '<select name="colores"><option value="1">blanco</option><option value="2">azul</option><option value="3">rojo</option><option value="4">verde</option><option value="5">amarillo</option><option value="6">rosa</option></select>'
function bucle(){
	for (var i = 0; i < 10; i++) {
		cad += '<div class="colors">He aprendido bien cómo funcionan los bucles '+ select + '</div>';

   //	colors.innerHTML += colorsValue;
	}
	return cad;
}
phrase.innerHTML = bucle();
//var colors = document.getElementById('colors').value;
//var colorsValue = colors.option[colors].value;

//console.log(colorsValue);
