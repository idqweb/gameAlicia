
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


function respuestaQuestion(opcion){
	
	if (opcion == 1)
		alert("Acertaste");
	
	if (opcion == 2){
		vidasAlicia = vidasAlicia -1;
			if (vidasAlicia == 0){finalGame();}
			var nuevaCapaPreguntas = document.getElementById('preguntasConOruga');
			nuevaCapaPreguntas.setAttribute("class","");
			
			creaTablero ();
	}
}




















