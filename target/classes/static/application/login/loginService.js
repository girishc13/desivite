angular.module('Desivite').service('LoginService', function($http) {
	
	function login(userName, passWord) {
		console.log('username', userName, 'password', passWord);
//		$http.post('/login', {"username": "hello"}).
//			then(function(resp) {
//				console.log('success');
//			},
//			function(resp){
//				console.log('error');
//			});
	}
	
	return {
		login: login
	}
	
});