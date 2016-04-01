// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("bannerServices", function($http, config) {
	return {
		query: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/IndexBannerManage/indexBanner",
				method: "GET",
				cache: true,
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		}
	}
});