/* Condiciones INICIALES del JUEGO */

	var tableroFilasTotales = 8;
	var tableroColumnasTotales = 16;
	var vidasAlicia = 1;
	var colisionDetectada =false;
	var tamanoCelda = 65;
	var ventanaJuegoAlicia;


function creaTablero (){
		
	var html="<table border='0' class='mapa'>";
	
	
	//pongo ahora xy dentro de la zelda para verla
	for (y=0;y < tableroFilasTotales;y++){
		html=html+"<tr>";
		for (x=0; x < tableroColumnasTotales;x++){
			
			html+="<td class=camino id="+x+","+y+"></td>";
			
		}
		html=html+"</tr>";
	}
	html=html+"</table>";
	document.getElementById('tablero').innerHTML=html;
	colocaPersonajes ();
	
	// vidas que tiene alicia
	var vidasEnPantalla = vidasAlicia;
	document.getElementById('numeroVidas').innerHTML=vidasEnPantalla;
	
	
	colisionDetectada =false;
	
}

function colocaPersonajes (){
	inicioPosicionAlicia();
	posiciondeObjetos();
	inicioPosicionSoldados();
	
}


function posiciondeObjetos(){
	
	//colocamos totod los objetos
	document.getElementById("1,0").className = "piedra";
	document.getElementById("2,2").className = "piedra";
	document.getElementById("3,1").className = "piedra";
	document.getElementById("6,7").className = "piedra";
	document.getElementById("4,5").className = "piedra";
	document.getElementById("9,1").className = "piedra";
	document.getElementById("13,6").className = "piedra";
	document.getElementById("8,0").className = "piedra";
	document.getElementById("12,4").className = "piedra";
	document.getElementById("1,3").className = "arbol";
	document.getElementById("13,2").className = "arbol";
	document.getElementById("9,4").className = "arbol";
	document.getElementById("2,7").className = "arbol";
	document.getElementById("0,6").className = "arbol";
	document.getElementById("6,1").className = "arbol";
	document.getElementById("14,5").className = "arbol";
	document.getElementById("6,5").className = "arbol";
	document.getElementById("11,7").className = "arbol";
	document.getElementById("9,2").className = "arbol";
	document.getElementById("7,3").className = "espejo";
	document.getElementById("0,7").className = "oruga";
	document.getElementById("1,6").className = "gato";

}


// aumenta o reduce el Tablero de juego
function reduce(){
	
		//primero 
		var tamano= $('.alicia').css("background-size");
		var numeroTamano = tamano.split ('px ');
		tamanoCelda = parseInt(numeroTamano[0]) - 10;
		
		// reducir personajes
        $('.alicia').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.oruga').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.soldado').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.gato').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.piedra').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.camino').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.arbol').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
	
		// reducir las celdas
		$('.mapa tr td').css("width",tamanoCelda+"px");
		$('.mapa tr td').css("height",tamanoCelda+"px");
}

function aumenta(){
	
		//primero 
		var tamano= $('.alicia').css("background-size");
		var numeroTamano = tamano.split ('px ');
		tamanoCelda = parseInt(numeroTamano[0]) + 5;
		
		// reducir personajes
        $('.alicia').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.oruga').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.soldado').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.gato').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.piedra').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.camino').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
		$('.arbol').css("background-size",tamanoCelda+"px"+" "+tamanoCelda+"px");
	
		// reducir las celdas
		$('.mapa tr td').css("width",tamanoCelda+"px");
		$('.mapa tr td').css("height",tamanoCelda+"px");
}















