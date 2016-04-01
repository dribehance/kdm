// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("messagesServices", function($http, localStorageService, config) {
	return {
		query: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/PushMessageManage/pushMessageList",
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
				url: config.url + "/app/PushMessageManage/deleteMessage",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		queryById: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/PushMessageManage/messageInfo",
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