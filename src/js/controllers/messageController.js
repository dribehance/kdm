// by dribehance <dribehance.kksdapp.com>
var messageController = function($scope, messagesServices, errorServices, toastServices, localStorageService, config) {
	toastServices.show();
	messagesServices.query().then(function(data) {
		toastServices.hide()
		if (data.status == config.response.SUCCESS) {
			$scope.messages = data.PushMessages;
		} else {
			errorServices.autoHide(data.message);
		}
	})
	$scope.remove = function(id) {
		toastServices.show();
		messagesServices.remove({
			push_message_id: id
		}).then(function(data) {
			toastServices.hide()
			if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				$scope.messages = $scope.messages.filter(function(m) {
					return m.push_message_id != id;
				})
			} else {
				errorServices.autoHide(data.message);
			}
		})
	}
	// $scope.collapse_id = $scope.last_collapse_id = "";
	// $scope.queryById = function(id) {
	// 	if (id == $scope.last_collapse_id) {
	// 		return;
	// 	}
	// 	messagesServices.queryById({
	// 		push_message_id: id
	// 	}).then(function(data) {
	// 		toastServices.hide()
	// 		if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
	// 			$scope.last_collapse_id = $scope.collapse_id;
	// 			$scope.collapse_id = id;
	// 			$scope.message_detail = data.PushMessage;
	// 		} else {
	// 			errorServices.autoHide(data.message);
	// 		}
	// 	})
	// }
}