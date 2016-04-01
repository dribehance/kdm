// by dribehance <dribehance.kksdapp.com>
var signinController = function($scope, $location, $route, $rootScope, $location, userServices, errorServices, toastServices, localStorageService, config) {
	if (localStorageService.get("token")) {
		$location.path("/index").replace();
		return;
	}
	$scope.input = {
		telephone: "",
		password: ""
	}
	$scope.submit = function() {
		toastServices.show();
		userServices.signin($scope.input).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				localStorageService.set("token", data.token);
				userServices.sync();
				$rootScope.back();
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	$scope.forget = function() {
		$location.path("/forget")
	}
	$scope.signup = function() {
		$location.path("signup")
	}
}