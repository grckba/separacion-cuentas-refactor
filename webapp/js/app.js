
// declare a module
var myAppModule = angular.module('myApp', []);

myAppModule.controller('BotonFinalizarCtrl', function BotonFinalizarCtrl($scope) {

	$scope.estaHabilitado = function(){
		return true;
	}

});
