var jquery = require('jquery');
var angular = require('./js/lib/angular');

var myApp = angular.module('myApp', ['ui.ace']);
myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
myApp.controller("controller", ["$scope", function($scope) {
		$scope.code = "alert('hello world');";
}]);
