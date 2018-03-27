 var twitterApp = angular.module('twitterApp', ['ngRoute']);


 


twitterApp.config(function ($routeProvider) {
	$routeProvider
	
	.when('/', {
		templateUrl : 'twitterSearch.html',
		controller  : 'twitterAppController'
	})

	.when('/twitterResults', {
		templateUrl : 'twitterResults.html',
		controller  : 'resultsController'
	})


});


 