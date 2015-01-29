/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myApp", []);

app.config(function($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: 'partials/home.html'
            })
            .when('/about', {
                controller: 'aboutController',
                templateUrl: 'partials/about.html'
            })
            .when('/contact', {
                controller: 'contactController',
                templateUrl: 'partials/contact.html'
            })
});

app.controller("homeController", function($scope){
    $scope.test = "AngularJs bootcamp"
});
app.controller("aboutController", function($scope){
});
app.controller("contactController", function($scope){
});
