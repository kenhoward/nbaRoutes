var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = !$scope.showNewGameForm // Is this right?
	if ($routeParams.team ===  'Utah Jazz' || 'Los Angeles Lakers' || 'Miami Heat';) {
		
	}






// $scope.submitGame = function(){
// 	$scope.newGame.homeTeam = $scope.homeTeam.split('').join('').toLowerCase();
// 	teamService.addNewGame($scope.newGame).then(function(res){ // may not even need to pu in 'res'
// 		teamService.getTeamData($scope.newGame.homeTeam).then(function(response){
// 			$scope.teamData = response;
// 			$scope.newGame = {};
// 			$scope.showNewGameForm = false;			
// 		}, function(error){ // for .then # 1
// 			console.log(error);
// 		})
// 	}, function(err){ // for .then # 2
// 		console.log(err);
// 	})
// }

});