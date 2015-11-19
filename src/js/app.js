angular.module('directings', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/controller', {
        templateUrl: "templates/controller.html"
    });
}]);
