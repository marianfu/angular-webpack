var jquery = require('jquery');
var angular = require('./js/lib/angular');
var Parser = require('./js/parser');
//var Escodegen = require('escodegen');

var myApp = angular.module('myApp', ['ui.ace']);
myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
myApp.controller("controller", ["$scope", function($scope) {
		$scope.code = "";
		$scope.code2 = "";

		$scope.change = function() {
			var str = Parser.parse($scope.code);
			if(str != null)
				$scope.code2 = JSON.stringify(str);
		};
}]);
