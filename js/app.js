var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
  	.when('/', {
  		templateUrl: 'js/home/homeTmpl.html',
  		controller: 'homeCtrl'
  		// resolve: {
  		// 	allData: function($route, homeService) {
  		// 		return homeService.getAllData();
  		// 	}
  		// }
  	})
  	.when('/teams/:teams' {
  		templateUrl: 'js/teams/teamsTmpl.html',
  		controller: 'teamCtrl'
  		resolve: {
  			teamData: function($route, teamService) {
  				return teamService.getTeamData($route.current.params.team); // This is will call the getTeamData method from the teamService.js. This will return a promise, once resolved, it will give us the data here in the controller.
  			}
  		}
  	})
  	.otherwise ({
  		redirectTo: '/'
  	})
});