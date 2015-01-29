/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myApp", []);

app.controller("mainController", function($scope) {

});
app.controller("resultsController", function($scope, $http) {
    $scope.countries = [];
    $scope.heading = "List of all world countries";
    $scope.curPage = 0;
    $scope.pageSize = 10;
    $scope.numberOfPages = null;
    $scope.selectedCountry = null;
    $scope.selectedCountryIndex = null;
    $http({
        method: 'GET',
        url: 'api/world.php',
        data: '',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .success(function(data) {
                $scope.countries = data;
            })
            .error(function(error) {

            });$http({
        method: 'POST',
        url: 'api/world.php',
        data: '',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .success(function(data) {
                $scope.countries = data;
            })
            .error(function(error) {

            });
    $scope.numberOfPages = function()
    {
        return Math.ceil($scope.countries.length / $scope.pageSize);
    };
    $scope.setSelectedCountry = function(country, index) {
        $scope.selectedCountry = country;
        $scope.selectedCountryIndex = index;
    };
    $scope.deleteCountry = function() {
        $http({
            method: 'POST',
            url: 'api/world.php',
            data: '',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                .success(function(data) {
                    //$scope.countries = data;
                })
                .error(function(error) {

                });

        $scope.countries.splice($scope.countries.indexOf($scope.selectedCountry), 1);
    };
    $scope.editCountry = function() {
        $scope.countries.splice($scope.selectedCountryIndex, 1);
    };

});

angular.module('myApp').filter('pagination', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    };
});
