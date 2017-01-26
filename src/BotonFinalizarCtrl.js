
app.controller('BotonFinalizarCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	var habilitado = false;
	var mostrarBtnFinalizar = false;

	var hayCuentasSeparadas = false;
	var opcionCertificadoSeleccionada = false;

	// El botón debe estar oculto mientras no se haya encontrado un cliente
    $scope.mostrarBtnFinalizar = function(){
        return mostrarBtnFinalizar;
    }

    $rootScope.$on('infoClienteCargada', function () {
        mostrarBtnFinalizar = true;
    });

	$scope.estaHabilitado = function(){
		habilitado = hayCuentasSeparadas && opcionCertificadoSeleccionada;
		return habilitado;
	}

	$rootScope.$on('hayCuentasSeparadas', function () {
        hayCuentasSeparadas = true;
    });

    $rootScope.$on('opcionCertificadoSeleccionada', function () {
        opcionCertificadoSeleccionada = true;
    });


}]);