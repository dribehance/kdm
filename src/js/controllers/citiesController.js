// by dribehance <dribehance.kksdapp.com>
var citiesController = function($scope, $rootScope, $location, $routeParams, locationServices, errorServices, toastServices, localStorageService, config) {
	locationServices.query_all().then(function(data) {
		angular.forEach(data.province, function(value, index) {
			if (value.name == $routeParams.province) {
				if (!(value.city instanceof Array)) {
					value.city = new Array(value.city)
				}
				$scope.cities = value.city;
			}
		});
		if ($scope.cities.length == 0) {
			localStorageService.set("province", $routeParams.province);
			localStorageService.remove("city");
			localStorageService.remove("district");
			$rootScope.back();
			return;
		}
	})
	$scope.query_distircts = function(city) {
		$location.path("/districts").search({
			"province": $routeParams.province,
			"city": city
		}).replace();
	}
}