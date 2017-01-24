describe("Botón de finalizar proceso", function() {
  beforeEach(module('myApp'));

  var $controller;
  var $scope;

  beforeEach(inject(function(_$controller_){
  	$scope = {};
    $controller = _$controller_('BotonFinalizarCtrl', { $scope: $scope });
  }));


  it("debe tener una función que indique si está habilitado o no", function() {
    expect($scope.estaHabilitado).toBeDefined();
  });

  it("debe estar deshabilitado por defecto", function() {
    expect($scope.estaHabilitado()).toBeFalsy();
  });

  it("debe estar habilitado cuando se conteste si se requiere certificado", function() {
  	spyOn(foo, 'setBar');

  	$scope.requiereCertificado = "SI";
    expect($scope.estaHabilitado()).toBeTruthy();
  });
});