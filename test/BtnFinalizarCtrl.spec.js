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

    it("debe estar oculto por defecto", function() {
        expect($scope.mostrarBtnFinalizar()).toBeFalsy();
    });

    it("debe mostrarse cuando se ha cargado la información de un cliente", function() {
        $rootScope.$emit('infoClienteCargada');
        expect($scope.mostrarBtnFinalizar()).toBeTruthy();
    });

    it("debe estar deshabilitado por defecto", function() {
        expect($scope.estaHabilitado()).toBeFalsy();
    });

    it("debe estar deshabilitado cuando hayan cuentas separadas y no se haya contestado si se requiere certificado", function() {
        $rootScope.$emit('hayCuentasSeparadas');
        expect($scope.estaHabilitado()).toBeFalsy();
    });

    it("debe estar deshabilitado si se contestó si se requiere certificado sin tener cuentas separadas", function() {
        $rootScope.$emit('opcionCertificadoSeleccionada');
        expect($scope.estaHabilitado()).toBeFalsy();
    });

    it("debe habilitarse una vez hayan cuentas separadas y se conteste si se requiere o no certificado", function() {
        $rootScope.$emit('hayCuentasSeparadas');
        $rootScope.$emit('opcionCertificadoSeleccionada');
        expect($scope.estaHabilitado()).toBeTruthy();
    });
});