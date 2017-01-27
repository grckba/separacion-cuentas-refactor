/**
 * Created by grace on 27/01/17.
 */

app.controller('FormularioSeparacionCtrl', function ($scope) {

    var titulo = "";
    var mostrar = false;

    var solicitud, solicitudInicial;
    solicitud = {
        'cantidad' : '',
        'oficina' : '',
        'medioDePago' : '',
        'estado' : 'PENDIENTE'
    };
    solicitudInicial = angular.copy(solicitud);

    var solicitudes = [];

    // Título
    $scope.setTitulo = function (_titulo_) {
        titulo = _titulo_;
    }

    $scope.titulo = function () {
        return titulo;
    }

    // Mostrar/Ocultar
    $scope.mostrar = function () {
        return mostrar;
    }

    $scope.cambiarVisibilidad = function () {
        mostrar = !mostrar;
    }

    // Solicitudes
    $scope.solicitudes = function () {
        return solicitudes;
    }

    // Formulario
    $scope.cantidad = function () {
        return solicitud.cantidad;
    }

    $scope.oficina = function () {
        return solicitud.oficina;
    }

    $scope.medioDePago = function () {
        return solicitud.medioDePago;
    }

    $scope.setCantidad = function (_cantidad_) {
        solicitud.cantidad = _cantidad_;
    }

    $scope.setOficina = function (_oficina_) {
        solicitud.oficina = _oficina_;
    }

    $scope.setMedioDePago = function (_medioDePago_) {
        solicitud.medioDePago = _medioDePago_;
    }

    $scope.agregarSolicitud = function () {
        solicitudes.push(solicitud);
        solicitud = angular.copy(solicitudInicial);
    }
});