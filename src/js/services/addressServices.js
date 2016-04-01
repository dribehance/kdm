// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("addressServices", function($http, localStorageService, config) {
	return {
		history: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/AddressManage/addressLog",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		add: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/AddressManage/addAddress",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		remove: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/AddressManage/deleteAddress",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		}
	}
});