'use strict';

var cad = "";
var phrase = document.getElementById('phraseLoop');
var select = ''
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
document.querySelector('select[name="colores"]').onchange=changeEventHandler;
// var selectValue = select.value;
// console.log(selectValue);
// function changeColors() {
// 	if (true) {
//
// 	}
// }
