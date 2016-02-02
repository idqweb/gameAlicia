
/* Condiciones INICIALES del JUEGO */

	var tableroFilasTotales = 10;
	var tableroColumnasTotales = 10;
	var vidasAlicia = 3;
	var colisionDetectada =false;
	
	


window.addEventListener('load',creaTablero,false);
window.addEventListener('keyup',moverAlicia,false);
window.addEventListener('keyup',movimientosEspeciales,false);
window.addEventListener('load',compruebaPos,false);





function creaTablero (){
		
	var html="<table border='0' class='mapa'>";
	
	
	//pongo ahora xy dentro de la zelda para verla
	for (y=0;y < tableroFilasTotales;y++){
		html=html+"<tr>";
		for (x=0; x < tableroColumnasTotales;x++){
			
			html+="<td class=imgObjeto id="+x+","+y+">"+x+y+"</td>";
			
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
	
	//colocamos piedras
	document.getElementById("1,0").className = "piedra";
	document.getElementById("2,2").className = "piedra";
	document.getElementById("3,1").className = "piedra";
	
	
	document.getElementById("3,5").className = "arbol";
	document.getElementById("5,5").className = "arbol";
	document.getElementById("0,4").className = "arbol";
	document.getElementById("0,8").className = "arbol";
	document.getElementById("2,9").className = "arbol";
	document.getElementById("0,9").className = "oruga";
	document.getElementById("1,8").className = "gato";
	
	
	
	
}




////////// FUNCIONES DEL PERSONAJE ALICIA ////////////////////
function inicioPosicionAlicia(){
	
	document.getElementById("2,0").className = "alicia";
	
	
}





//Funcion que se encarga de comprobar POS de Alicia y solo vuelve a ser llamada si hubo mov de Alicia
function compruebaPos(){
	var posicionActualAlicia = document.getElementsByClassName('alicia')[0].id;
		// partir el string
	var posicionTotalAlicia= posicionActualAlicia.split(',');
	var posicionXdeAlicia = parseInt(posicionTotalAlicia[0]);
	var posicionYdeAlicia = parseInt(posicionTotalAlicia[1]);	
	
	
	var movimientoPosible = movimientosPosiblesAlicia(posicionXdeAlicia,posicionYdeAlicia); 
		
		pintaMovimientos(movimientoPosible);
		
}







function moverAlicia (movimiento){
	
	// Obtengo la id segun la class de alicia asi se su coordenada actual
	
	if(typeof document.getElementsByClassName('alicia')[0] == 'undefined'){
		
		//movimiento.preventDefault ();
	}
	else{
		
	var posicionActualAlicia = document.getElementsByClassName('alicia')[0].id;
		// partir el string
	var posicionTotalAlicia= posicionActualAlicia.split(',');
	var posicionXdeAlicia = parseInt(posicionTotalAlicia[0]);
	var posicionYdeAlicia = parseInt(posicionTotalAlicia[1]);	
	
	
	var movimientoPosible = movimientosPosiblesAlicia(posicionXdeAlicia,posicionYdeAlicia); 
		//alert(movimientoPosible);
		
		
	//moverse a right
		if (movimiento.keyCode == 39){
			if(movimientoPosible[0]){	
					document.getElementById(posicionActualAlicia).className = "imgObjeto";
				
					//si a donde me voy a mover esta la oruga
						if(document.getElementById(parseInt(posicionXdeAlicia+1)+","+parseInt(posicionYdeAlicia)).className == "oruga"){
							colisionGeneral ("oruga");
							
						}
						else if (document.getElementById(parseInt(posicionXdeAlicia+1)+","+parseInt(posicionYdeAlicia)).className == "gato"){
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							colisionGeneral ("gato",posicionXdeAlicia+1,posicionYdeAlicia);
							document.getElementById('whereIsAlicia').className = "alicia";//mando a la class="alicia" a otro punto para que siga en juego
							document.getElementById('whereIsGato').className = "gato";//mando a la class="gato" a otro punto para que siga en juego
							
						}
						else{
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							document.getElementById(parseInt(posicionXdeAlicia+1)+","+parseInt(posicionYdeAlicia)).className = "alicia";
							
						}
													
					compruebaPos();
					
			}
			else{
				document.getElementById('sonido1').play();
				
			}
		}
	//moverse a left
		if (movimiento.keyCode == 37){
			if(movimientoPosible[1]){	
					
				
					//si a donde me voy a mover esta la oruga
						if(document.getElementById(parseInt(posicionXdeAlicia-1)+","+parseInt(posicionYdeAlicia)).className == "oruga"){
							colisionGeneral ("oruga");
							document.getElementById(parseInt(posicionXdeAlicia-1)+","+posicionYdeAlicia).className = "aliciaOruga";
							
								var nuevaCapaPreguntas = document.getElementById('preguntasConOruga');
								nuevaCapaPreguntas.setAttribute("class","aliciaOrugaQuestions");
							
							
						}
						else if (document.getElementById(parseInt(posicionXdeAlicia-1)+","+parseInt(posicionYdeAlicia)).className == "gato"){
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							colisionGeneral ("gato",posicionXdeAlicia-1,posicionYdeAlicia);
							document.getElementById('whereIsAlicia').className = "alicia";//mando a la class="alicia" a otro punto para que siga en juego
							document.getElementById('whereIsGato').className = "gato";//mando a la class="gato" a otro punto para que siga en juego
						}
							
						else{
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							document.getElementById(parseInt(posicionXdeAlicia-1)+","+posicionYdeAlicia).className = "alicia";
							
						}
				
					compruebaPos();					
					
			}
			else{
				document.getElementById('sonido1').play();
				
			}
		}
		
	//moverse a up
		if (movimiento.keyCode == 38){
			if(movimientoPosible[2]){
				
				//si a donde me voy a mover esta la oruga
						if(document.getElementById(parseInt(posicionXdeAlicia)+","+parseInt(posicionYdeAlicia-1)).className == "oruga"){
							colisionGeneral ("oruga");
							//document.getElementById(parseInt(posicionXdeAlicia-1)+","+posicionYdeAlicia).className = "aliciaOruga";
						}
						else if (document.getElementById(parseInt(posicionXdeAlicia)+","+parseInt(posicionYdeAlicia-1)).className == "gato"){
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							colisionGeneral ("gato",posicionXdeAlicia,posicionYdeAlicia-1);
							document.getElementById('whereIsAlicia').className = "alicia";//mando a la class="alicia" a otro punto para que siga en juego
							document.getElementById('whereIsGato').className = "gato";//mando a la class="gato" a otro punto para que siga en juego
						}
							
						else{
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							document.getElementById(parseInt(posicionXdeAlicia)+","+parseInt(posicionYdeAlicia-1)).className = "alicia";
							
						}
				
					compruebaPos();				
					
			}
			else{
				document.getElementById('sonido1').play();
			}
		}
	
	//moverse a down
		if (movimiento.keyCode == 40){
			if(movimientoPosible[3]){	
				
				
					if(document.getElementById(parseInt(posicionXdeAlicia)+","+parseInt(posicionYdeAlicia+1)).className == "oruga"){
							colisionGeneral ("oruga");
							//document.getElementById(parseInt(posicionXdeAlicia-1)+","+posicionYdeAlicia).className = "aliciaOruga";
						}
						else if (document.getElementById(parseInt(posicionXdeAlicia)+","+parseInt(posicionYdeAlicia+1)).className == "gato"){
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							colisionGeneral ("gato",posicionXdeAlicia,posicionYdeAlicia+1);
							document.getElementById('whereIsAlicia').className = "alicia";//mando a la class="alicia" a otro punto para que siga en juego
							document.getElementById('whereIsGato').className = "gato";//mando a la class="gato" a otro punto para que siga en juego
						}
							
						else{
							document.getElementById(posicionActualAlicia).className = "imgObjeto";
							document.getElementById(parseInt(posicionXdeAlicia)+","+parseInt(posicionYdeAlicia+1)).className = "alicia";
							
						}
				
					compruebaPos();				
					
			}
			else{
				document.getElementById('sonido1').play();
			}
		}
		
		
	}
	
	
}
////////// FINAL - FUNCIONES DEL PERSONAJE ALICIA ////////////////////


function pintaMovimientos(movimientoPosible){
	
	var movimientoPosi = movimientoPosible;
	var movimientosEnPantalla=""; 
	
		if(movimientoPosi[0])
			movimientosEnPantalla += "<img src='./images/right.png' alt='flechaDerecha'/>";
	
		if(movimientoPosi[1])
			movimientosEnPantalla += "<img src='./images/left.png' alt='flechaIzquierda'/>";
	
		if(movimientoPosi[2])
			movimientosEnPantalla += "<img src='./images/up.png' alt='flechaSubir'/>";
	
		if(movimientoPosi[3])
			movimientosEnPantalla += "<img src='./images/down.png' alt='flechaBajar'/>";
					
	
	document.getElementById('movimientos').innerHTML=movimientosEnPantalla;
	
}




////////// FUNCIONES DEL PERSONAJE SOLDADO ////////////////////
function inicioPosicionSoldados(){
	
	
	
		document.getElementById("3,3").className = "soldado";
		//los soldados cuando se colocan comienzan a moverse
		var frecuenciaMovSoldado = setInterval(function(){ moverSoldado (); }, 1000);
	
	
}

function moverSoldado (){
		
	// Cuando existe una colision que alicia choca contra el Soldado borra la class soldado por eso pongo esto
	if(typeof document.getElementsByClassName('soldado')[0] == 'undefined'){
		
		var aliciaVSsoldado ="aliciaVSsoldado";
		
		if (colisionDetectada == false){
			colisionDetectada = true;
			colisionAliciaSoldado (aliciaVSsoldado);
			
			
		}
		
		
	}
	else{
		// Obtengo la id segun la class soldado asi se su coordenada actual
			var posicionActualSoldado = document.getElementsByClassName('soldado')[0].id;
		// partir el string
			var posicionTotalSoldado= posicionActualSoldado.split(',');
			var posicionXdeSoldado = parseInt(posicionTotalSoldado[0]);
			var posicionYdeSoldado = parseInt(posicionTotalSoldado[1]);
		var movPosibleSoldado = movimientosPosiblesSoldado(posicionXdeSoldado,posicionYdeSoldado);
	
		//de los movimientos posibles que tiene que haga uno al azar son [Right,Left,Up,Down]
		var aleatorioRango = Math.floor((Math.random() * 4));

		// soldado moviendose a Right
		if ( aleatorioRango == 0){
				if(movPosibleSoldado[0]){	
						document.getElementById(posicionActualSoldado).className = "imgObjeto";
						document.getElementById(parseInt( posicionXdeSoldado+1)+","+posicionYdeSoldado).className = "soldado";
				}
		}
		// soldado moviendose a Left
		if ( aleatorioRango == 1){
				if(movPosibleSoldado[1]){	
						document.getElementById(posicionActualSoldado).className = "imgObjeto";
						document.getElementById(parseInt( posicionXdeSoldado-1)+","+posicionYdeSoldado).className = "soldado";
				}
		}
		// soldado moviendose Up
		if (aleatorioRango == 2){
				if(movPosibleSoldado[2]){	
						document.getElementById(posicionActualSoldado).className = "imgObjeto";
						document.getElementById(posicionXdeSoldado+","+parseInt(posicionYdeSoldado-1)).className = "soldado";
				}
		}
		//soldado moviendose DOWn
			if (aleatorioRango == 3){
				if(movPosibleSoldado[3]){	
						document.getElementById(posicionActualSoldado).className = "imgObjeto";
						document.getElementById(posicionXdeSoldado+","+parseInt(posicionYdeSoldado+1)).className = "soldado";
				}
			}

	
	}
	
	
	//Compruebo si la clase alicia ya no existe es que hubo una colision del soldado contra alicia tenia problemas
	// pues el movimiento de alicia esta escuchado por un keyup y hasta que ese no se producia no sabiamos si la clase ya no estaba undefined va
	
	if(typeof document.getElementsByClassName('alicia')[0] == 'undefined'){
		var soldadoVSalicia ="soldadoVSalicia";
		
		
		if (colisionDetectada == false){
			colisionDetectada = true;
			colisionAliciaSoldado (soldadoVSalicia);
					
		}
		
	}
	

	
}
////////// FINAL - FUNCIONES DEL PERSONAJE SOLDADO ////////////////////




//////////  MOVIMIENTOS POSIBLES PARA ALICIA ////////////////////

function movimientosPosiblesAlicia (x,y){
	//devuelve un array [right,left,up,down] como true o false en ese orden
	var movimientoOK=[false,false,false,false];
		
		var coordenadaRight = x+1;
		var coordenadaLeft = x-1;
		var coordenadaUp = y-1;
		var coordenadaDown = y+1;
	
	var mRight = ""+coordenadaRight+","+y;
	var mLeft = "" +coordenadaLeft+","+y; 
	var mUp = ""+x+","+coordenadaUp;
	var mDown = "" +x+","+ coordenadaDown;
	
	
	// COMPROBACION ELIMINAR !!alert(mRight+"derecha" + mLeft+ "izquierda"+ mUp +"arriba"+ mDown + "abajo");
	
	
	
	if(document.getElementById(mRight)){
		if(document.getElementById(mRight).className !== 'piedra'){movimientoOK[0] = true;}
		if(document.getElementById(mRight).className == 'arbol'){movimientoOK[0] = false;}
		
	}
	if(document.getElementById(mLeft)){
		if(document.getElementById(mLeft).className !== 'piedra'){movimientoOK[1] = true;}
		if(document.getElementById(mLeft).className == 'arbol'){movimientoOK[1] = false;}
		 
	}
	if(document.getElementById(mUp)){
		if(document.getElementById(mUp).className !== 'piedra'){movimientoOK[2] = true;}
		if(document.getElementById(mUp).className == 'arbol'){movimientoOK[2] = false;}
		
	}
	
	if(document.getElementById(mDown)){
		if(document.getElementById(mDown).className !== 'piedra'){movimientoOK[3] = true;}
		if(document.getElementById(mDown).className == 'arbol'){movimientoOK[3] = false;}
		
	}
	
	
	
	return movimientoOK;
}

////////// FINAL - MOVIMIENTOS POSIBLES PARA ALICIA ////////////////////


//////////  MOVIMIENTOS POSIBLES PARA SOLDADO ////////////////////

function movimientosPosiblesSoldado (x,y){
	//devuelve un array [right,left,up,down] como true o false en ese orden
	var movimientoOK=[false,false,false,false];
		
		var coordenadaRight = x+1;
		var coordenadaLeft = x-1;
		var coordenadaUp = y-1;
		var coordenadaDown = y+1;
	
	var mRight = ""+coordenadaRight+","+y;
	var mLeft = "" +coordenadaLeft+","+y; 
	var mUp = ""+x+","+coordenadaUp;
	var mDown = "" +x+","+ coordenadaDown;
	
	
	// COMPROBACION ELIMINAR !!alert(mRight+"derecha" + mLeft+ "izquierda"+ mUp +"arriba"+ mDown + "abajo");
	
	
	
	if(document.getElementById(mRight)){
		if(document.getElementById(mRight).className !== 'piedra'){movimientoOK[0] = true;}
		if(document.getElementById(mRight).className == 'arbol'){movimientoOK[0] = false;}
		if(document.getElementById(mRight).className == 'gato'){movimientoOK[0] = false;} //No puede con GATO
		
	}
	if(document.getElementById(mLeft)){
		if(document.getElementById(mLeft).className !== 'piedra'){movimientoOK[1] = true;}
		if(document.getElementById(mLeft).className == 'arbol'){movimientoOK[1] = false;}
		if(document.getElementById(mLeft).className == 'gato'){movimientoOK[1] = false;}
		  
	}
	if(document.getElementById(mUp)){
		if(document.getElementById(mUp).className !== 'piedra'){movimientoOK[2] = true;}
		if(document.getElementById(mUp).className == 'arbol'){movimientoOK[2] = false;}
		if(document.getElementById(mUp).className == 'gato'){movimientoOK[2] = false;}
	}
	
	if(document.getElementById(mDown)){
		if(document.getElementById(mDown).className !== 'piedra'){movimientoOK[3] = true;}
		if(document.getElementById(mDown).className == 'arbol'){movimientoOK[3] = false;}
		if(document.getElementById(mDown).className == 'gato'){movimientoOK[3] = false;}
		
	}
	
	
	
	return movimientoOK;
}

////////// FINAL - MOVIMIENTOS POSIBLES PARA SOLDADO ////////////////////


///////// COLISION ALICIA Y EL SOLDADO ///////

function colisionAliciaSoldado (direccionColision){
		
	if(direccionColision == "soldadoVSalicia"){
		alert("colision y comenzamos");
			
			vidasAlicia = vidasAlicia -1;
			
			creaTablero ();
		
	}
	
	
	
			
	if(direccionColision == "aliciaVSsoldado"){
		alert("colision de alicia contra soldado y comenzamos");
			
			vidasAlicia = vidasAlicia -1;
			
			creaTablero ();
		
	}
		
	
}



/// FUNCION GENERAL DE CONTROL DE COLICIONES DE ALICIA CON OBJETOS ESTATICOS le paso el tipo y la posicion de la colision /////////////////
function colisionGeneral (tipoObjeto,x,y){

	var tipodeObjetoEnColision = tipoObjeto;
	var posicionXdeLaColision = x;
	var posicionYdeLaColision = y;
	
	if (tipodeObjetoEnColision == "oruga"){
		alert("colision contraoruga");	
	}
	else if (tipodeObjetoEnColision == "gato"){
		document.getElementById(parseInt(posicionXdeLaColision)+","+posicionYdeLaColision).className = "aliciaGato";
		
		
	}
	
}

/////////////////////////////////////////////////////////////////////////



function movimientosEspeciales (evt){
	
	//alicia deje de hablar con el gato "Enter"
		if (evt.keyCode == 13){
				if(document.getElementsByClassName('alicia')[0].id == "whereIsAlicia"){
					volverAlTablero("alicia");
					
				}
			
		}
	//alicia pone al gato en su sitio "Control"	
		if (evt.keyCode == 17){
				if(document.getElementsByClassName('gato')[0].id == "whereIsGato"){
					volverAlTablero("gato");
					
				}
			
		}
	
	
}









function volverAlTablero(personaje){
	
	var perso = personaje;
	
	if (perso == "alicia"){
		document.getElementById("1,8").className = "alicia";
		document.getElementById('whereIsAlicia').className = "";
	}
	if (perso == "gato"){
		document.getElementById("1,8").className = "gato";
		document.getElementById('whereIsGato').className = "";
	}
}






















