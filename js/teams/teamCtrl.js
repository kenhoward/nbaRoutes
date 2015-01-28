var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){ // $scope and $routeParams gives us access to :team in the url, teamsService which gives us access to getting the teams data and adding new games, and teamData which gives us the data that is being returned from teamService.getData in our resolve block in the app.js file
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	// $scope.toggleNewGameForm = !$scope.showNewGameForm // Is this right?
	$scope.toggleNewGameForm = function(){ //method
		$scope.showNewGameForm = !$scope.showNewGameForm;
	}

	if ($routeParams.team === 'utahjazz') { // without the .teams, it messes up so much
		$scope.homeTeam = 'Utah Jazz',
		$scope.logoPath = 'images/jazz-logo.png'
	} else if ($routeParams.team === 'losangeleslakers') { // without the .teams, it messes up so much
		// console.log('Am I here?');
		$scope.homeTeam = 'Los Angeles Lakers',
		$scope.logoPath = 'images/lakers-logo.png'
	} else if ($routeParams.team === 'miamiheat') { // without the .teams, it messes up so much
		$scope.homeTeam = 'Miami Heat',
		$scope.logoPath = 'images/heat-logo.png'
	// } else if ($routeParams.team === 'gswarriors') { 
	// 	$scope.homeTeam = 'Golden State Warriors',
	// 	$scope.logoPath = 'images/warriors-logo.png'
	}


	$scope.submitGame = function(){
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope.newGame)
			.then(function(res){ // may not even need to pu in 'res'
				teamService.getTeamData($scope.newGame.homeTeam)
					.then(function(response){
						$scope.teamData = response;
						$scope.newGame = {};
						$scope.showNewGameForm = false;			
					}, function(error){ // for .then # 1
						console.log(error);
					})
			}, function(err){ // for .then # 2
				console.log(err);
			})
	}

});