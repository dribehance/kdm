angular.module("KDM").constant("config", {
    url: "http://120.25.123.134:8080",
    imageUrl: "http://120.25.123.134:8080/files/image?name=",
    request: {
        "SUCCESS": "200",
        "TOKEN_INVALID": "405"
    },
    response: {
        "SUCCESS": 1
    },
    common_params: {
        invoke: "h5"
    },
});