// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("geoServices", function($q, $window) {
	return {
		position: function() {
			var defer = $q.defer();
			$window.navigator.geolocation.getCurrentPosition(function(position) {
				defer.resolve(position);
			}, function() {
				defer.reject();
			});
			return defer.promise;
		}
	}
});