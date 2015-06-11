var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    .when("/conditions", {templateUrl: "partials/conditions.html", controller: "ConditionsCtrl"})
    .when('/webcams', {templateUrl:'partials/webcams.html', controller:'WebcamsCtrl'})
    .when('/tenday', {templateUrl:'partials/tenday.html', controller:'TendayCtrl'})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "ErrCtrl"});
}]);


