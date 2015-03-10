var ArticulosController = function($scope,GetArticulosFactory, SessionService){
    $scope.articulos = [];

    $scope.error = {
        message: undefined
    };

    $scope.getArticulos = function(){
        GetArticulosFactory()
        .then(function(response){
            $scope.articulos = response;
        }, function(response){
            $scope.error.message = response.Message;
        });
    }

    $scope.getArticulos();
}
ArticulosController.$inject = ['$scope', 'GetArticulosFactory', 'SessionService'];

