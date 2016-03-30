// by dribehance <dribehance.kksdapp.com>
var thirdController = function($scope, $location, SharedState, errorServices, toastServices, localStorageService, config) {
	$scope.express = {
		state: "1",
		type: "all"
	}
	$scope.change_type = function(type) {
		$scope.express.type = type;
		SharedState.turnOff("dropdown_panel");
	}
	$scope.change_state = function(state) {
		$scope.express.state = state;
	}
	$scope.detail = {};
	$scope.query_detail = function(id) {
		$scope.detail.id = id;
	}
	$scope.record = function(e) {
		e.stopPropagation();
		$location.path("/record");
	}
}