/**
 * Created by Facundo on 05/03/2015.
 */
var GetArticulosByCodigoFactory = function($http, $q, SessionService){
    return function(codigo){
        var result = $q.defer();

        $http({
            method: 'GET',

            url:SessionService.apiUrl + '/api/articulos?codigo=' + codigo,
            headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + SessionService.token}
        })
            .success(function(response){
                result.resolve(response);
            })
            .error(function(response){
                result.reject(response);
            });

        return result.promise;
    }
}

GetArticulosByCodigoFactory.$inject = ['$http', '$q', 'SessionService'];

