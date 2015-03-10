var GetArticulosFactory = function($http, $q, SessionService){
    return function(){    
        var result = $q.defer();
 
        $http({
            method: 'GET',
            url:SessionService.apiUrl + '/api/articulos',
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


GetArticulosFactory.$inject = ['$http', '$q', 'SessionService'];