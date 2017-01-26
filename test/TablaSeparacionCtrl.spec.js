/**
 * Created by grace on 26/01/17.
 */

describe("Tabla de separacion de cuentas", function() {

    beforeEach(module('myApp'));

    beforeEach(inject(function(_$controller_) {
        $scope = {};
        $controller = _$controller_('TablaSeparacionCtrl', {$scope: $scope});
    }));

    it("debe existir", function () {

    });

});