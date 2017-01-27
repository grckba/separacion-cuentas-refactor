/**
 * Created by grace on 26/01/17.
 */

describe("Formulario separacion de cuentas", function() {

    beforeEach(module('myApp'));

    beforeEach(inject(function(_$controller_) {
        $scope = {};
        $controller = _$controller_('FormularioSeparacionCtrl', {$scope: $scope});
    }));

    // Título
    it("debe tener una función para colocar un título", function () {
        expect($scope.setTitulo).toBeDefined();
    });

    it("debe tener una función para consultar el título", function () {
        expect($scope.titulo).toBeDefined();
    });

    it("debe permitir cambiar el título", function () {
        $scope.setTitulo('CUENTAS AHORROS');
        expect($scope.titulo()).toEqual('CUENTAS AHORROS');
    });

    // Mostrar/Ocultar
    it("debe tener un valor que muestre u oculte el formulario", function () {
        expect($scope.mostrar).toBeDefined();
    });

    it("debe iniciar oculto", function () {
        expect($scope.mostrar()).toBeFalsy();
    });

    it("debe cambiar el valor de 'mostrar' cuando se haga click en este", function () {
        $scope.cambiarVisibilidad();
        expect($scope.mostrar()).toBeTruthy();
    });

    it("debe tener un valor que muestre u oculte el formulario", function () {
        expect($scope.mostrar).toBeDefined();
    });

    // Solicitudes
    it("debe tener una lista de solicitudes", function () {
        expect($scope.solicitudes).toBeDefined();
    });

    // Formulario
    it("debe tener cantidad, oficina y medio de pago", function () {
        expect($scope.cantidad).toBeDefined();
        expect($scope.oficina).toBeDefined();
        expect($scope.medioDePago).toBeDefined();
    });

    it("debe permitir settear una cantidad", function () {
        expect($scope.setCantidad).toBeDefined();
        $scope.setCantidad(5);
        expect($scope.cantidad()).toEqual(5);
    });

    it("debe permitir settear una oficina", function () {
        expect($scope.setOficina).toBeDefined();
        $scope.setOficina('Oficina principal');
        expect($scope.oficina()).toEqual('Oficina principal');
    });

    it("debe permitir settear un medio de pago", function () {
        expect($scope.setMedioDePago).toBeDefined();
        $scope.setMedioDePago('Sin chequera');
        expect($scope.medioDePago()).toEqual('Sin chequera');
    });

    it("debe permitir agregar una nueva solicitud", function () {
        expect($scope.agregarSolicitud).toBeDefined();
    });

    it("debe tener un botón agregar que agregue los valores actuales de los campos a una lista y luego limpie el formulario", function () {
        $scope.setCantidad(2);
        $scope.setOficina('Oficina oriente');
        $scope.setMedioDePago('Chequera 10');
        $scope.agregarSolicitud();
        expect($scope.solicitudes().length).toEqual(1);
        expect($scope.oficina()).toEqual('');
    });
});