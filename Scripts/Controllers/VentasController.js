/**
 * Created by Facundo on 03/03/2015.
 */
var VentasController = function($scope,SessionService, GetArticulosByCodigoFactory){
    $scope.aux=[];
    $scope.items = [];
    $scope.Total=0;
    $scope.Cantidad = 0;
    $scope.articulo;


    $scope.getArticulosByCodigo = function(){
        GetArticulosByCodigoFactory($scope.buscar.Codigo)
            .then(function(response){
                $scope.articulo = response;
                $scope.articulo.Time = new Date();
                $scope.articulo.Cantidad = 1;
                $scope.articulo.Codigo = response.Codigo;
                $scope.articulo.Nombre = response.Nombre;
                $scope.articulo.Descripcion = response.Descripcion;
                $scope.articulo.Marca=response.Marca;
                $scope.articulo.Unitario = response.Precio;
                $scope.aux.push($scope.articulo);
                $scope.items = compressArray($scope.aux);
                getTotals($scope.items);
                $scope.buscar.Codigo = "";
            }, function (response){
                $scope.error.message = response.Message;
            });
    }

    $scope.openArticulosSearchForm = function() {

        var modalInstance = modalInstance = $modal.open({
            templateUrl: 'views/articulos_search.html',
            controller: 'ArticulosSearchModalController as ctr',
            resolve: {
                user: function () {
                    return angular.copy(articulo);
                }
            }
        });
    }

    $scope.error = {
        message: undefined
    };

    function getTotals(array){
        $scope.Cantidad=0;
        $scope.Total=0;
        for (var i = 0; i < array.length; i++) {
            $scope.Cantidad = $scope.Cantidad + array[i].Cantidad;
            $scope.Total = $scope.Total + (array[i].Cantidad * array[i].Unitario);
        }
    }

    function compressArray(original) {

        var compressed = [];
        var copy = original.slice();

        for (var i = 0; i < original.length; i++) {

            var myCount = 0;
            for (var w = 0; w < copy.length; w++) {
                if (typeof copy[w] != "undefined") {
                    if (original[i].Codigo == copy[w].Codigo) {
                    myCount++;
                    delete copy[w];
                    }
                }
            }

            if (myCount > 0) {
                var a = new Object();
                a = original[i];
                a.Cantidad = myCount;
                compressed.push(a);
            }
        }

        return compressed;
    };



}
VentasController.$inject = ['$scope', 'SessionService','GetArticulosByCodigoFactory'];


var ArticulosSearchModalController = function($scope, $modalInstance) {

    $scope.seleccionArticulo = function (articulo) {

        $modalInstance.close(articulo);
    }

    $scope.cancelar = function () {

        $modalInstance.dismiss();
    }
};


