// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").controller("sidebarController", function($scope, $rootScope, $location, errorServices, toastServices, localStorageService, config) {
	$rootScope.cover = {};
	$scope.$on("mobile-angular-ui.state.changed.uiSidebarLeft", function(e, n, o) {
		if (n === true) {
			$rootScope.cover.show = true;
		} else {
			$rootScope.cover.show = false;
		}
	});
	$scope.login = function() {
		$location.path("/signin")
	}
});