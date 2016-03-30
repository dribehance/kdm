// by dribehance <dribehance.kksdapp.com>
var citiesController = function($scope, $rootScope, $location, $routeParams, locationServices, errorServices, toastServices, localStorageService, config) {
	locationServices.query_cities().then(function(data) {
		$scope.cities = data[$routeParams.province];
		if ($scope.cities.length == 0) {
			localStorageService.set("province", $routeParams.province);
			localStorageService.remove("city");
			localStorageService.remove("district");
			$rootScope.back();
			return;
		}
	});
	$scope.query_distircts = function(city) {
		$location.path("/districts").search({
			"province": $routeParams.province,
			"city": city
		}).replace();
	}
}