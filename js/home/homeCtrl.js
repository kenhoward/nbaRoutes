var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allData){
	$scope.jazzData = allData['utahjazz'];
	$scope.lakersData = allData['losangeleslakers'];
	$scope.heatData = allData['miamiheat'];

});