'use strict';

function bucle(){
	for (var i = 0; i < 100; i++) {
		phrase.innerHTML += "He aprendido bien cómo funcionan los bucles" + "<br>";
	}
}
var phrase = document.getElementById('phraseLoop');
bucle();
