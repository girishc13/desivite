/**
 * 
 */
angular.module("Desivite",["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
	
	 $urlRouterProvider.otherwise("/home");
	 
	 $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "/application/home/views/home.html",
	      controller: "HomeController"
	    })
	    .state('login', {
	      url: "/login",
	      templateUrl: "application/login/views/login.html",
	      controller: "LoginController"
	    });
});