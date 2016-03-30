// by dribehance <dribehance.kksdapp.com>
var signinController = function($scope, $location, errorServices, toastServices, localStorageService, config) {
	$scope.forget = function() {
		$location.path("/forget")
	}
	$scope.signup = function() {
		$location.path("signup")
	}
}