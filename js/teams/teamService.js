var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	this.addNewGame = function(gameObj) {

		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}
		return $http ({
			method: 'POST',
			url: url,
			data: gameObj
		})

	}

	this.getTeamData = function(team) {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/' + team
		}).then(function(data){
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if (results[i].won === true) {
					wins++;
				} else {
					losses++;
				}
			}
			results.wins = wins; // 
			results.losses = losses;
			// console.log(results)
			dfd.resolve(results) // This will pass results back to the controller
		})
		return dfd.promise;
	}

});




