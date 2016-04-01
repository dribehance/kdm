// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").controller("sidebarController", function($scope, $rootScope, $location, userServices, errorServices, toastServices, localStorageService, config) {
	$rootScope.cover = {};
	$scope.$on("mobile-angular-ui.state.changed.uiSidebarLeft", function(e, n, o) {
		if (n === true) {
			$rootScope.cover.show = true;
		} else {
			$rootScope.cover.show = false;
		}
	});
	$scope.login = function() {
		$location.path("/signin").search("uiSidebarLeft", null)
	}
	$scope.logout = function() {
		userServices.exit();
	}
});
// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").controller("avatarController", function($scope, localStorageService, config) {
	$scope.$on("flow::filesSubmitted", function(event, flow, flowFile) {
		flow.opts.target = config.url + "/app/UserCenter/UpdateAvatar";
		flow.opts.testChunks = false;
		flow.opts.fileParameterName = "image_01";
		flow.opts.query = {
			"token": localStorageService.get("token")
		}
		flow.upload();
	})
});