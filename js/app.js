/*-----------------------------------------------------------------------------------------Preguntas*/
var contador_respuestas = 1;
// Inicializamos las ´respuestas
var myEl = angular.element( document.querySelector( '#respuestas' ) );
myEl.prepend('<div class="col-sm-12"><input type="text" placeholder="Respuesta '+ contador_respuestas +'" class="form-control respuestas"></div>');
angular.module("preguntas",[]).controller('PreguntaController',function($scope){
	$scope.AddRespuesta = function() {
		if(contador_respuestas <= 10){
			var myEl = angular.element( document.querySelector( '#respuestas' ) );
	     	myEl.prepend('<div class="col-sm-12"><input type="text" placeholder="Respuesta '+ contador_respuestas +'" class="form-control Respuestas"></div><br><br>');
	     	contador_respuestas++;
		}
    };

    $scope.AddPregunta = function(){
    	var respuestas = [];
    	var pregunta = $scope.pregunta;
    	// capturo las respuestas
    	var cap_respuestas = $('.Respuestas');
    	for (var cr in cap_respuestas){
    		if(cap_respuestas[cr].value != undefined && cap_respuestas[cr].value != ""){
    			respuestas.push({respuesta: cap_respuestas[cr].value})
    		}
    	}
    };
});
/* --------------------------------------------------------------------------------------- FIN Preguntas*/
