// by dribehance <dribehance.kksdapp.com>
var districtsController = function($scope, $rootScope, $routeParams, locationServices, errorServices, toastServices, localStorageService, config) {
	locationServices.query_all().then(function(data) {
		angular.forEach(data.province, function(value, index) {
			if (value.name == $routeParams.province) {
				if (!(value.city instanceof Array)) {
					value.city = new Array(value.city);
				}
				angular.forEach(value.city, function(v, i) {
					if (v.name == $routeParams.city) {
						if (!(v.district instanceof Array)) {
							v.district = new Array(v.district)
						}
						$scope.districts = v.district;
					}
				})
			}
		});
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
			"district": district.name
		}));
		$rootScope.back();
	}
}