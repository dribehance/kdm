// by dribehance <dribehance.kksdapp.com>
var indexController = function($scope, $rootScope, $route, $location, expressServices, errorServices, toastServices, localStorageService, config) {
	$scope.express = {
		type: localStorageService.get("express_type") ? localStorageService.get("express_type") : "普通件"
	}
	$scope.express_from = {};
	$scope.express_to = {};
	if (localStorageService.get("express_from")) {
		$scope.express_from = localStorageService.get("express_from");
		$scope.from = $scope.express_from.username + $scope.express_from.telephone + $scope.express_from.province + $scope.express_from.city + $scope.express_from.district + $scope.express_from.street;
	}
	if (localStorageService.get("express_to")) {
		$scope.express_to = localStorageService.get("express_to");
		$scope.to = $scope.express_to.username + $scope.express_to.telephone + $scope.express_to.province + $scope.express_to.city + $scope.express_to.district + $scope.express_to.street;
	}
	$scope.query_address = function(address) {
		if (address == "from") {
			localStorageService.set("address", $scope.express_from);
		}
		if (address == "to") {
			localStorageService.set("address", $scope.express_to);
		}
		localStorageService.set("express_type", $scope.express.type)
		$location.path("/address").search(address);
	}
	$scope.submit = function() {
		localStorageService.remove("express_to");
		localStorageService.remove("express_from");
		var params = {
			send_name: $scope.express_to.username,
			send_telephone: $scope.express_to.telephone,
			send_province: $scope.express_to.province,
			send_city: $scope.express_to.city,
			send_area: $scope.express_to.district,
			send_address: $scope.express_to.street,
			latitude: $rootScope.geoposition.coords.latitude,
			longitude: $rootScope.geoposition.coords.longitude,
			collect_name: $scope.express_from.username,
			collect_telephone: $scope.express_from.telephone,
			collect_province: $scope.express_from.province,
			collect_city: $scope.express_from.city,
			collect_area: $scope.express_from.district,
			collect_address: $scope.express_from.street,
			send_type: $scope.express.type,

		}
		if (localStorageService.get("token")) {
			params = angular.extend({}, params, {
				token: localStorageService.get("token"),
				telephone: $rootScope.user.telephone
			})
		}
		if ($scope.express.type != "国际速运" && ($scope.express_to.province == "" || $scope.express_from.province == "")) {
			errorServices.autoHide("非国际速运请填写详细的地址");
			return;
		}
		expressServices.send(params).then(function(data) {
			errorServices.autoHide(data.message)
		})
		localStorageService.set("express_type", $scope.express.type);
		$route.reload();
	}
}