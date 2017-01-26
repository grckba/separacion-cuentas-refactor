describe("Selector respuesta requiere certificado", function() {
  beforeEach(module('myApp'));

  var $controller;
  var $scope;
  var $rootScope;

  beforeEach(inject(function(_$controller_, $injector){
  	$scope = {};
    $controller = _$controller_('RespuestaCertificadoCtrl', { $scope: $scope });
    $rootScope = $injector.get('$rootScope');
  }));


  it("debe tener una función que indique si ha sido seleccionado o no", function() {
    expect($scope.estaSeleccionado).toBeDefined();
  });

  it("debe emitir un evento cuando se haya seleccionado una respuesta", function() {
    spyOn($rootScope, '$emit');
    // how to emulate an user picking an option?
    expect($rootScope.$emit).toHaveBeenCalledWith('opcionCertificadoSeleccionada');
  });


});