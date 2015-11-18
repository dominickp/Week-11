angular.module('directings', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html'
    });
}]);
