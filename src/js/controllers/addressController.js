// by dribehance <dribehance.kksdapp.com>
var addressController = function($scope, $rootScope, $location, $routeParams, errorServices, toastServices, localStorageService, config) {
	$scope.input = {
		username: "",
		telephone: "",
		province: "",
		city: "",
		district: ""
	};
	if (localStorageService.get("address")) {
		$scope.input = angular.extend({}, $scope.input, localStorageService.get("address"));
		$scope.input.province_city_district = $scope.input.province + $scope.input.city + $scope.input.district;
	}
	$scope.query_province = function() {
		localStorageService.set("address", $scope.input);
		$location.path("/provinces");
	}
	$scope.submit = function() {
		// validate form here;
		if ($routeParams.to) {
			localStorageService.set("express_to", $scope.input);
		}
		if ($routeParams.from) {
			localStorageService.set("express_from", $scope.input);
		}
		$rootScope.back();
	};
	// var province = localStorageService.get("province") ? localStorageService.get("province") : "";
	// var city = localStorageService.get("city") ? localStorageService.get("city") : "";
	// var district = localStorageService.get("district") ? localStorageService.get("district") : "";
	// var sign = $routeParams.to == true ? "to" : "from";
	// $scope.input = {};
	// $scope.input.province_city_district = province + city + district;
	// $scope.submit = function() {
	// 	localStorageService.set(sign, {
	// 		"username": $scope.input.username,
	// 		"telephone": $scope.input.telephone,
	// 		"province": province,
	// 		"city": city,
	// 		"district": district,
	// 		"street": $scope.input.street
	// 	});
	// 	localStorageService.remove("province");
	// 	localStorageService.remove("city");
	// 	localStorageService.remove("district");
	// 	$rootScope.back();
	// }
	// if ($routeParams.to && localStorageService.get("to") && province == "") {
	// 	console.log("to")
	// 	$scope.input = {
	// 		"username": localStorageService.get("to").username,
	// 		"telephone": localStorageService.get("to").telephone,
	// 		"province": localStorageService.get("to").province,
	// 		"city": localStorageService.get("to").city,
	// 		"district": localStorageService.get("to").district,
	// 		"street": localStorageService.get("to").street
	// 	}
	// 	$scope.input.province_city_district = $scope.input.province + $scope.input.city + $scope.input.district;
	// }
	// if ($routeParams.from && localStorageService.get("from") && province == "") {
	// 	console.log("from")
	// 	$scope.input = {
	// 		"username": localStorageService.get("from").username,
	// 		"telephone": localStorageService.get("from").telephone,
	// 		"province": localStorageService.get("from").province,
	// 		"city": localStorageService.get("from").city,
	// 		"district": localStorageService.get("from").district,
	// 		"street": localStorageService.get("from").street
	// 	}
	// 	$scope.input.province_city_district = $scope.input.province + $scope.input.city + $scope.input.district;
	// }
}