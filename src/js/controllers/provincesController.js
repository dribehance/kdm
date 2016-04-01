// by dribehance <dribehance.kksdapp.com>
var provincesController = function($scope, $location, locationServices, errorServices, toastServices, localStorageService, config) {
	$scope.query_cities = function(province) {
		$location.path("/cities").search("province", province).replace();
	}
	locationServices.query_all().then(function(data) {
		var provinces = [];
		angular.forEach(data.province, function(value, index) {
			provinces.push(value.name);
		})
		$scope.provinces = provinces;
	})
}