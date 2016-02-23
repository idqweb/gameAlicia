
function questions(){
	var nuevaCapaPreguntas = document.getElementById('preguntasConOruga');
	nuevaCapaPreguntas.setAttribute("class","aliciaOrugaQuestions");
	var pregunta ="<div class='preguntas'>";
		pregunta += "<h5>¿Cuántos surcos tiene un disco de audio? Un disco de vinilo, se entiende.</h5>"
		pregunta += "Opcion 1 : Una por cara.";
		pregunta += "<br/>";
		pregunta += "Opcion 2 : Una por canción.";
		pregunta += "</div>";
		pregunta += "<div class='botonesRespuesta'>";
		pregunta += "<button onclick='respuestaQuestion(1)' class='btn btn-primary btn-sm'>Opción 1</button>";
		pregunta += "<button onclick='respuestaQuestion(2)' class='btn btn-primary btn-sm'>Opción 2</button>";
		pregunta += "</div>";
	
	
	document.getElementById('preguntasConOruga').innerHTML=pregunta;
	
}


function acierto (){
	var textoVictoria = document.getElementById('preguntasConOruga');
	textoVictoria.setAttribute("class","aliciaOrugaQuestions");
	var victoria ="<div class='preguntas'>";
		victoria += "<h5>!!EnhoraBuena has ACERTADO!!</h5>"
		victoria += "Ya dispones de <img src='./images/key.png' width='40px' height='40px' />"
		victoria+= "<button onclick='respuestaQuestion(3)' class='btn btn-primary btn-sm'>Continuar</button>";
		victoria += "</div>";
	
	
	document.getElementById('preguntasConOruga').innerHTML=victoria;
	
	
}




function respuestaQuestion(opcion){
	
	if (opcion == 1)
		acierto();
	
	if (opcion == 2){
		vidasAlicia = vidasAlicia -1;
			if (vidasAlicia == 0){finalGame();}
			var nuevaCapaPreguntas = document.getElementById('preguntasConOruga');
			nuevaCapaPreguntas.setAttribute("class","");
			
			creaTablero ();
	}
	
	if(opcion == 3){
		var textoVictoria = document.getElementById('preguntasConOruga');
		
		textoVictoria.removeChild(textoVictoria.firstChild); //elimina el hijo donde salen las preguntas
		textoVictoria.setAttribute("class","");
		llave = true;
	}
	
	
}




















