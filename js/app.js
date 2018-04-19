'use strict';

// angular.js main app initialization
var app = angular.module('tatwho', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'pages/index.html'
        }).
        when('/home', {
          templateUrl: 'pages/home.html'
        }).
        when('/userhome', {
          templateUrl: 'pages/userhome.html'
        }).
        when('/usersettings', {
          templateUrl: 'pages/usersettings.html'
        }).
        when('/artistsettings', {
          templateUrl: 'pages/artistsettings.html'
        }).
        when('/artistedit', {
          templateUrl: 'pages/artistedit.html'
        }).
        when('/shopsettings', {
          templateUrl: 'pages/shopsettings.html'
        }).
        when('/shopedit', {
          templateUrl: 'pages/shopedit.html'
        }).
        when('/search', {
          templateUrl: 'pages/search.html'
        }).
        when('/searchresults', {
          templateUrl: 'pages/dummysearch.html'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);
