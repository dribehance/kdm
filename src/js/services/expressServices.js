// by dribehance <dribehance.kksdapp.com>
angular.module("KDM").factory("expressServices", function($http, localStorageService, config) {
	return {
		// 预约寄件
		send: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/send",
				method: "GET",
				params: angular.extend({}, config.common_params, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 查询快件信息
		query: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/searchSend",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 快件查询历史记录
		history: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/searchLog",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 删除快件查询历史记录
		remove: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/deleteSearchLog",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 预约寄件记录
		records: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/myExpress",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 查询寄件详情
		queryDetail: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/sendInfo",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 录入快递单号
		recordIn: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/addExNumber",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 确认录入快递电话
		confirmRecordIn: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/comfityAddExNumber",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 取消寄件预约
		cancel: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/cancelSend",
				method: "GET",
				params: angular.extend({}, config.common_params, {
					token: localStorageService.get("token")
				}, input)
			}).then(function(data) {
				return data.data;
			});
		},
		// 删除寄件信息
		removeRecord: function(input) {
			return $http({
				// by dribehance <dribehance.kksdapp.com>
				url: config.url + "/app/SendManage/deleteSend",
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