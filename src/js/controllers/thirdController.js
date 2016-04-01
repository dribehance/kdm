// by dribehance <dribehance.kksdapp.com>
var thirdController = function($scope, $rootScope, $location, expressServices, SharedState, errorServices, toastServices, localStorageService, config) {
	$scope.express = {
		type: "1",
		state: "1"
	}
	$scope.records = [];
	$scope.page = {
		pn: 1,
		page_size: 10,
		telephone: localStorageService.get("user") ? localStorageService.get("user").telephone : "",
		type: $scope.express.type,
		send_status: $scope.express.state,
		message: "点击加载更多"
	}
	$scope.loadMore = function() {
		if ($scope.no_more) {
			return;
		}
		toastServices.show();
		$scope.page.message = "正在加载...";
		expressServices.records($scope.page).then(function(data) {
			toastServices.hide();
			$scope.page.message = "点击加载更多";
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$scope.records = $scope.records.concat(data.Result.Send.list);
				$scope.no_more = $scope.records.length == data.Result.Send.totalRow ? true : false;
			} else {
				errorServices.autoHide("服务器错误");
			}
			if ($scope.no_more) {
				$scope.page.message = "没有了";
			}
			$scope.page.pn++;
		})

	}
	$scope.loadMore();
	$scope.remove = function() {

	}
	$scope.change_type = function(type) {
		$scope.express.type = type;
		$scope.page = {
			pn: 1,
			page_size: 10,
			telephone: $rootScope.user.telephone,
			type: $scope.express.type,
			send_status: $scope.express.state,
			message: "点击加载更多"
		}
		$scope.records = [];
		$scope.no_more = false;
		$scope.loadMore();
		SharedState.turnOff("dropdown_panel");
	}
	$scope.change_state = function(state) {
		$scope.express.state = state;
		$scope.page = {
			pn: 1,
			page_size: 10,
			telephone: $rootScope.user.telephone,
			type: $scope.express.type,
			send_status: $scope.express.state,
			message: "点击加载更多"
		}
		$scope.records = [];
		$scope.no_more = false;
		$scope.loadMore();
	}
	$scope.express_state = ["待取件", "运送中", "已送达", "已失效"];
	$scope.get_text = function(id) {
		return $scope.express_state[id - 1];
	}
	$scope.results = [];
	$scope.collapse_id = $scope.last_collapse_id = "";
	$scope.query_record_detail = function(record) {
		if (record.send_status == 1) {
			return;
		}
		if (record.send_id == $scope.last_collapse_id) {
			// $scope.collapse_id = $scope.last_collapse_id = ""
			return;
		}
		toastServices.show();
		expressServices.queryDetail({
			send_id: record.send_id,
			ex_number: record.ex_number,
			jc_company: record.jc_company
		}).then(function(data) {
			toastServices.hide()
			$scope.collapse_id = record.send_id;
			$scope.last_collapse_id = $scope.collapse_id;
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$scope.result = data.KuaidiBeans;
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	$scope.get_date = function(time) {
		return time.split(" ")[0].split("/").join(".")
	}
	$scope.get_time = function(time) {
		return time.split(" ")[1]
	}
	$scope.record_in = function(e, id) {
		e.stopPropagation();
		$location.path("/record").search("id", id);
	}
	$scope.cancel = function(id, e) {
		e.stopPropagation();
		toastServices.show();
		expressServices.cancel({
			send_id: id
		}).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$scope.records = $scope.records.filter(function(record) {
					return record.send_id != id;
				})
				errorServices.autoHide(data.message);
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	$scope.remove = function(id, e) {
		e.stopPropagation();
		toastServices.show();
		expressServices.removeRecord({
			send_id: id
		}).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$scope.records = $scope.records.filter(function(record) {
					return record.send_id != id;
				})
				errorServices.autoHide(data.message);
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
}