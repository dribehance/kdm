// by dribehance <dribehance.kksdapp.com>
var recordController = function($scope, $rootScope, $routeParams, SharedState, expressServices, errorServices, toastServices, localStorageService, config) {
	$scope.input = {};
	$scope.submit = function() {
		toastServices.show();
		expressServices.recordIn({
			send_id: $routeParams.id,
			ex_number: $scope.input.ex_number
		}).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$rootScope.back();
			} else {
				$scope.message = data.message;
				SharedState.turnOn("confirm_panel");
			}
		})
	}
	$scope.confirm_record_in = function() {
		SharedState.turnOff("confirm_panel");
		toastServices.show();
		expressServices.confirmRecordIn({
			send_id: $routeParams.id,
			ex_number: $scope.input.ex_number
		}).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$rootScope.back();
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
}