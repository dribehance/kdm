// by dribehance <dribehance.kksdapp.com>
var searchResultController = function($scope, $rootScope, $routeParams, expressServices, errorServices, toastServices, localStorageService, config) {
	toastServices.show();
	expressServices.query({
		ex_number: $routeParams.ex_number,
		jc_company: ""
	}).then(function(data) {
		toastServices.hide()
		if (data.status == config.response.SUCCESS) {
			$scope.result = data.KuaidiBeans;
		} else {
			errorServices.autoHide(data.message);
			$rootScope.back();
		}
	});

	$scope.get_date = function(time) {
		return time.split(" ")[0].split("/").join(".")
	}
	$scope.get_time = function(time) {
		return time.split(" ")[1]
	}
}