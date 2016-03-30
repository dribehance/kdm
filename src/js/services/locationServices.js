// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("locationServices", function($http, $rootScope, localStorageService) {
	return {
		query_provinces: function() {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: "city/provinces.json",
				method: "GET",
			}).then(function(data) {
				return data.data;
			});
		},
		query_cities: function(province) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: "city/cities.json",
				method: "GET",
			}).then(function(data) {
				return data.data;
			});
		},
		query_districts: function(city) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: "city/districts.json",
				method: "GET",
			}).then(function(data) {
				return data.data;
			});
		}
	}
});