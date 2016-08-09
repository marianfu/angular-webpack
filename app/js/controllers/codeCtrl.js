var Parser = require('../parser');
var Escodegen = require('escodegen');

module.exports = function($scope) {
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
}