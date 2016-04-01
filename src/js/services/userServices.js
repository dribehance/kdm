// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("userServices", function($http, $rootScope, localStorageService, config) {
	return {
		signin: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/UserCenter/Login",
				method: "GET",
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		},
		signup: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/UserCenter/RegistTel",
				method: "GET",
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		},
		forget: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/UserCenter/ResetPassword",
				method: "GET",
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		},
		getSmscode: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/UserCenter/GetCode",
				method: "GET",
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		},
		checkBySignup: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/UserCenter/checkRegisterTel",
				method: "GET",
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		},
		checkByForget: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/UserCenter/checkForgetTel",
				method: "GET",
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		},
		queryUserInfo: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/UserCenter/baseInfo",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		sync: function() {
			$rootScope.user = $rootScope.user || {};
			var self = this;
			if (!localStorageService.get("token")) {
				return;
			}
			self.queryUserInfo({
				token: localStorageService.get("token")
			}).then(function(data) {
				if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
					$rootScope.user = angular.extend({}, $rootScope.user, data.Result.UserInfo);
					localStorageService.set("user", data.Result.UserInfo);
				} else {
					self.exit();
				}
			});
		},
		exit: function() {
			$rootScope.user = {};
			localStorageService.remove("token");
			localStorageService.remove("user");
		}
	}
});