describe("Botón de finalizar proceso", function() {
  beforeEach(module('myApp'));

  var $controller;
  var $scope;
  var $rootScope;

  beforeEach(inject(function(_$controller_, $injector){
  	$scope = {};
    $controller = _$controller_('BotonFinalizarCtrl', { $scope: $scope });
    $rootScope = $injector.get('$rootScope');
  }));


  it("debe tener una función que indique si está habilitado o no", function() {
    expect($scope.estaHabilitado).toBeDefined();
  });

  it("debe estar deshabilitado por defecto", function() {
    expect($scope.estaHabilitado()).toBeFalsy();
  });

  it("debe estar habilitado cuando se conteste si se requiere certificado", function() {
    spyOn($scope, 'habilitado');

  	$rootScope.$emit('opcionCertificadoSeleccionada');
    expect($scope.estaHabilitado()).toBeTruthy();
  });
});