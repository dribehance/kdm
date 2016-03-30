// by dribehance <dribehance.kksdapp.com>
var districtsController = function($scope, $rootScope, $routeParams, locationServices, errorServices, toastServices, localStorageService, config) {
	locationServices.query_districts().then(function(data) {
		$scope.districts = data[$routeParams.province + $routeParams.city];
		if ($scope.districts.length == 0) {
			localStorageService.set("address", angular.extend({}, localStorageService.get("address"), {
				"province": $routeParams.province,
				"city": $routeParams.city,
				"district": ""
			}));
			$rootScope.back();
			return;
		}
	})
	$scope.choose_district = function(district) {
		localStorageService.set("address", angular.extend({}, localStorageService.get("address"), {
			"province": $routeParams.province,
			"city": $routeParams.city,
			"district": district
		}));
		$rootScope.back();
	}
}