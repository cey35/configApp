var app = angular.module('myApp', ['ngRoute', 'ngStorage']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('app', {
        templateUrl: './pages/app1Component/app1.html',
        controller: 'app1Controller'
    });
});