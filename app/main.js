var jquery = require('jquery');
var angular = require('./js/lib/angular');
var Parser = require('./js/parser');
var Escodegen = require('escodegen');
//require('ui.ace');
//gagag

var myApp = angular.module('myApp', ['ui.ace']);
myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
myApp.controller("controller", ["$scope", function($scope) {
		$scope.code = "";
		$scope.code2 = "";
		$scope.code3 = "";

		$scope.change = function() {
			var str = Parser.parse($scope.code);
			var str2 = Escodegen.generate(str);
			$scope.code3 = JSON.stringify(str, null, '\t');
			
			if(str2 != null){
				$scope.code2 = str2;
			}
		};
}]);
