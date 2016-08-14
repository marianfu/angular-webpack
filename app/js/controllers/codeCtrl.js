var pseudo = require('pseudo-js');

module.exports = function($scope) {
		$scope.code = "";
		$scope.code2 = "";
		$scope.code3 = "";

		$scope.change = function() {
			var syntaxTree = pseudo.parseToSyntaxTree($scope.code);
			var code = pseudo.parseToJS($scope.code);

			$scope.code3 = JSON.stringify(syntaxTree, null, '\t');
			
			if(code != null){
				$scope.code2 = code;
			}
		};
}