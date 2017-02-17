console.log('Pessoas.js - ROUTE');

var pessoas = angular.module('Pessoas', ['ngRoute', 'ngResource']);
    //ñ importa o nome deste parâmetro ($routerProvider) ele irá receber o valor de ['$routerProvider']
pessoas.config(['$routeProvider', function($routeProvider){

    $routeProvider
          .when('/',{
            templateUrl:'pessoas/templates/index.html'
          });

}]);


/*OBS:
  .config(['$routeProvider' - 'Erro de moduleInject' estava com 'r' no plugin $routerProvider
*/
