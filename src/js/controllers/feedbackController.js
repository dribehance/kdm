// by dribehance <dribehance.kksdapp.com>
var feedbackController = function($scope, $rootScope, $timeout, feedbackServices, errorServices, toastServices, localStorageService, config) {
	$scope.input = {
		name: "",
		contact: "",
		content: ""
	}
	$scope.submit = function() {
		toastServices.show();
		feedbackServices.feedback({}).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				errorServices.autoHide(data.message);
				$timeout(function() {
					$rootScope.back();
				}, 3000)
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
}