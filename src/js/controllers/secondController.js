// by dribehance <dribehance.kksdapp.com>
var secondController = function($scope, $rootScope, $route, $location, SharedState, bannerServices, expressServices, errorServices, toastServices, localStorageService, config) {
	// $scope.banners = ["../images/banner.png", "../images/banner1.png"];
	toastServices.show();
	bannerServices.query().then(function(data) {
		toastServices.hide()
		if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
			$scope.banners = data.IndexBanners;
		} else {
			errorServices.autoHide(data.message);
		}
	});
	if (localStorageService.get("token")) {
		toastServices.show();
		expressServices.history().then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$scope.result = data.SearchLogs;
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	$scope.input = {
		ex_number: "",
		jc_company: ""
	}
	$scope.submit = function() {
		toastServices.show();
		expressServices.query($scope.input).then(function(data) {
			toastServices.hide()
			if (data.status == config.response.SUCCESS) {
				$location.path("/search_result").search("ex_number", $scope.input.ex_number);
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	$scope.remove = function(input) {
		toastServices.show();
		expressServices.remove(input).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				errorServices.autoHide(data.message);
				$route.reload();
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	$scope.clear = function(type) {
		SharedState.turnOn("confirm_panel");
	}
}