var AngularWebApp = angular.module('AngularWebApp', ['ngRoute','angularUtils.directives.dirPagination']);

AngularWebApp.controller('BaseController', BaseController);
AngularWebApp.controller('LoginController', LoginController);
AngularWebApp.controller('RegisterController', RegisterController);
AngularWebApp.controller('ArticulosController', ArticulosController);
AngularWebApp.controller('VentasController', VentasController);
AngularWebApp.factory('LoginFactory', LoginFactory);
AngularWebApp.factory('RegisterFactory', RegisterFactory);
AngularWebApp.factory('GetArticulosFactory', GetArticulosFactory);
AngularWebApp.factory('GetArticulosByCodigoFactory', GetArticulosByCodigoFactory);
AngularWebApp.service('SessionService', SessionService);

AngularWebApp.directive('ngEnter',ngEnter);


var ConfigFunction = function($routeProvider) {

  $routeProvider
   .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController'
  })
  .when('/articulos', {
    templateUrl: 'views/articulos.html',
    controller: 'ArticulosController'
  })
  .when('/ventas', {
    templateUrl: 'views/venta.html',
    controller: 'VentasController'
  })
  .when('/articulosSearch', {
    templateUrl: 'views/articulos_search.html',
    controller: 'ArticulosController'
  })
  .otherwise({
    redirectTo: '/'
  });



};
ConfigFunction.$inject = ['$routeProvider'];
AngularWebApp.config(ConfigFunction);