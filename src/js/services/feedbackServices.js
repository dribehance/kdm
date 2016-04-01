// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("feedbackServices", function($http, localStorageService, config) {
	return {
		feedback: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/FeedBackManage/feedback",
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