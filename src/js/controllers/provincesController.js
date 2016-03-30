// by dribehance <dribehance.kksdapp.com>
var provincesController = function($scope, $location, locationServices, errorServices, toastServices, localStorageService, config) {
	locationServices.query_provinces().then(function(data) {
		$scope.provinces = data.provinces;
	})
	$scope.query_cities = function(province) {
		$location.path("/cities").search("province", province).replace();
	}
}