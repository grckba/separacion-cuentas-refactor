
app.controller('BotonFinalizarCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.habilitado = false;

	$scope.estaHabilitado = function(){
		return $scope.habilitado;
	}

	$rootScope.$on('opcionCertificadoSeleccionada', function () {
        $scope.habilitado = true;
    });

}]);