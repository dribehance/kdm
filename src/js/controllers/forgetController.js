// by dribehance <dribehance.kksdapp.com>
var forgetController = function($scope, $rootScope, userServices, SharedState, errorServices, toastServices, localStorageService, config) {
	$scope.input = {
		telephone: "",
		tel_code: "",
		password: "",
		province: "广东省",
		"city": "深圳市"
	};
	$scope.next = function() {
		toastServices.show();
		userServices.checkByForget($scope.input).then(function(data) {
			toastServices.hide()
			if (data.status == config.response.SUCCESS) {
				SharedState.set("step", 2)
			} else {
				errorServices.autoHide(data.message);
			}
		})
	};
	// counting
	$scope.callbackTimer = {};
	$scope.callbackTimer.counting = 0;
	$scope.callbackTimer.finish = function() {
		$scope.callbackTimer.counting = 0;
		$scope.$apply();
	}
	$scope.callbackTimer.addSeconds = function(seconds) {
		angular.element("#kkcountdown")[0].clear();
		angular.element("#kkcountdown")[0].resume();
		angular.element("#kkcountdown")[0].start();
	};
	$scope.getSmscode = function() {
		userServices.getSmscode($scope.input).then(function(data) {
			if (data.status == config.response.SUCCESS) {
				console.log("验证码" + data.tel_code);
				// $scope.input.tel_code = data.tel_code;
				$scope.callbackTimer.counting = 1;
				$scope.callbackTimer.addSeconds(60);
				// errorServices.autoHide("验证码发送成功");
			} else {
				errorServices.autoHide(data.message);
				// $scope.sidebar.error.show = true;
				// $scope.sidebar.error.message = data.message;
			}
		})
	}
	$scope.password_state = "password";
	$scope.toggle = function() {
		if ($scope.password_state == "password") {
			$scope.password_state = "text";
		} else {
			$scope.password_state = "password"
		}
	}
	$scope.submit = function() {
		toastServices.show();
		userServices.forget($scope.input).then(function(data) {
			toastServices.hide()
			if (data.status == config.response.SUCCESS) {
				errorServices.autoHide(data.message);
				$rootScope.back();
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
}