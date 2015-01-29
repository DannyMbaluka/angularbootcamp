/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myApp", []);

app.config(function($routeProvider) {
    $routeProvider
            .when('/home', {
                controller: 'homeController',
                templateUrl: 'partials/home.html'
            })
            .when('/add', {
                controller: 'addController',
                templateUrl: 'partials/add.html'
            })
            .when('/fruits/view/:itemId', {
                controller: 'fruitViewController',
                templateUrl: 'partials/viewFruit.html'
            })
});

app.controller("homeController", function($scope){
    $scope.test = "AngularJs bootcamp"
});
