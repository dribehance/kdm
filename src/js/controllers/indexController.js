// by dribehance <dribehance.kksdapp.com>
var indexController = function($scope, $route, $location, errorServices, toastServices, localStorageService, config) {
	$scope.express = {
		type: "k1"
	}
	$scope.express_from = {};
	$scope.express_to = {};
	if (localStorageService.get("express_from")) {
		$scope.express_from = localStorageService.get("express_from");
		$scope.from = $scope.express_from.province + $scope.express_from.city + $scope.express_from.district;
	}
	if (localStorageService.get("express_to")) {
		$scope.express_to = localStorageService.get("express_to");
		$scope.to = $scope.express_to.province + $scope.express_to.city + $scope.express_to.district;
	}
	$scope.query_address = function(address) {
		if (address == "from") {
			localStorageService.set("address", $scope.express_from);
		}
		if (address == "to") {
			localStorageService.set("address", $scope.express_to);
		}
		$location.path("/address").search(address);
	}
	$scope.submit = function() {
		localStorageService.remove("express_to");
		localStorageService.remove("express_from");
		$route.reload();
	}
}