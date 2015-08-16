angular.module('Desivite').controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService) {
	
	$scope.username = '';
	$scope.password = '';
	
	$scope.login = function() {
		if($scope.username !== '' && $scope.password !== '') {
			LoginService.login($scope.username, $scope.password);
		}
	}
}]);