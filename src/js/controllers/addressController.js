// by dribehance <dribehance.kksdapp.com>
var addressController = function($scope, $route, $rootScope, $location, $routeParams, SharedState, addressServices, errorServices, toastServices, localStorageService, config) {
	$scope.input = {
		username: "",
		telephone: "",
		province: "",
		city: "",
		district: "",
		street: ""
	};
	$scope.express_type = localStorageService.get("express_type");
	if (localStorageService.get("address")) {
		$scope.input = angular.extend({}, $scope.input, localStorageService.get("address"));
		$scope.input.province_city_district = $scope.input.province + $scope.input.city + $scope.input.district + $scope.input.street;
	}
	$scope.histories = [];
	if (localStorageService.get("token")) {
		toastServices.show();
		addressServices.history().then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$scope.histories = data.Result.UserAddress;
			} else {
				// errorServices.autoHide(data.message);
			}
		})
	}
	$scope.query_province = function() {
		localStorageService.set("address", $scope.input);
		$location.path("/provinces");
	}
	$scope.submit = function() {
		if ($scope.input.username == "" || $scope.input.telephone == "") {
			errorServices.autoHide("请完善信息")
			return;
		}
		// localstorage
		if ($routeParams.to) {
			localStorageService.set("express_to", $scope.input);
		}
		if ($routeParams.from) {
			localStorageService.set("express_from", $scope.input);
		}
		localStorageService.set("address", $scope.input);
		if (localStorageService.get("express_type") == "国际速运") {
			$rootScope.back();
			return;
		}
		if ($scope.input.province_city_district == "") {
			errorServices.autoHide("请选择省市区")
			return;
		}
		if ($scope.input.street == "") {
			errorServices.autoHide("请填写详细的街道地址");
			return;
		}
		// persis in db
		addressServices.add({
			name: $scope.input.username,
			telephone: $scope.input.telephone,
			province: $scope.input.province,
			city: $scope.input.city,
			area: $scope.input.district,
			address: $scope.input.street
		});
		$rootScope.back();
	};
	$scope.clear = function() {
		SharedState.turnOn("confirm_panel");
	}
	$scope.remove = function(input, e) {
		e.stopPropagation();
		toastServices.show();
		addressServices.remove(input).then(function(data) {
			toastServices.hide()
			if (data.status == config.response.SUCCESS) {
				errorServices.autoHide(data.message);
				$route.reload();
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	$scope.choose_history = function(h) {
		$scope.input = {
			username: h.name,
			telephone: h.telephone,
			province: h.province,
			city: h.city,
			district: h.area,
			street: h.address
		};
		$scope.input.province_city_district = $scope.input.province + $scope.input.city + $scope.input.district + $scope.input.street;

	}
}