<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Alicia en el País de Nunca Jamás</title>
	<!-- Los estilos css de Bootstrap -->
		<link rel="stylesheet" href="./css/bootstrap.css"/>
	<!-- Mis estilos css PERSONALIZADOS -->
		<link rel="stylesheet" href="./css/estilos.css"/>
	
	<!-- carga de javascripts -->
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    	<script src="./js/jquery-2.1.4.min.js"></script>
	<!-- el que viene compilado -->
		<script src="./js/bootstrap.min.js" ></script>	
	<!-- el del juego -->
	<script src="./js/mijuego.js" ></script>
	
	
		
	
	
	
</head>
<body >

	<div class="container">
	<div class="row">
	
	<a href="./index_alicia.html"><div  class="titulologo"></div></a>
	
	
	
	<div id="areaPLay">
		
		
		<div class="mapa" id="tablero" name="tablero"></div>
		<div id="paneljuego">
			<div id="vidas">
				<img src="./images/corazon.png" alt="corazon"/>
				<div id="numeroVidas"></div>
			</div>
			Movimientos posibles
			<div id="movimientos">
				
				
			
			</div>
			<div id="objetosOut">
				
				<div id="whereIsAlicia" class=""></div>
				<div id="whereIsGato" class=""></div>
			</div>
			
		</div>	
			
	</div>
	
	 <audio id="sonido1">
 		 <source src="./sources/nomove.mp3" type="audio/mpeg">
 
	</audio> 
	
	
	
	
	
	
  
  
  </div>
</div>
	
	
</body>
</html>