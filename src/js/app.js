// by dribehance <dribehance.kksdapp.com>
angular.module("KDM", [
        "ngRoute",
        "mobile-angular-ui",
        "mobile-angular-ui.core",
        "LocalStorageModule",
        "timer"
    ])
    .config(function($routeProvider, $httpProvider, localStorageServiceProvider) {
        $routeProvider
            .when("/index", {
                templateUrl: "home.html",
                reloadOnSearch: false,
                controller: indexController
            })
            .when("/second", {
                templateUrl: "second.html",
                reloadOnSearch: false,
                controller: secondController
            })
            .when("/third", {
                templateUrl: "third.html",
                reloadOnSearch: false,
                controller: thirdController
            })
            .when("/signin", {
                templateUrl: "signin.html",
                reloadOnSearch: false,
                controller: signinController
            })
            .when("/signup", {
                templateUrl: "signup.html",
                reloadOnSearch: false,
                controller: signupController
            })
            .when("/forget", {
                templateUrl: "forget.html",
                reloadOnSearch: false,
                controller: forgetController
            })
            .when("/setting", {
                templateUrl: "setting.html",
                reloadOnSearch: false,
                controller: settingController
            })
            .when("/message", {
                templateUrl: "message.html",
                reloadOnSearch: false,
                controller: messageController
            })
            .when("/record", {
                templateUrl: "record.html",
                reloadOnSearch: false,
                controller: recordController
            })
            .when("/address", {
                templateUrl: "address.html",
                reloadOnSearch: false,
                controller: addressController
            })
            .when("/feedback", {
                templateUrl: "feedback.html",
                reloadOnSearch: false,
                controller: feedbackController
            })
            .when("/provinces", {
                templateUrl: "_provinces.html",
                reloadOnSearch: false,
                controller: provincesController
            })
            .when("/cities", {
                templateUrl: "_cities.html",
                reloadOnSearch: false,
                controller: citiesController
            })
            .when("/districts", {
                templateUrl: "_districts.html",
                reloadOnSearch: false,
                controller: districtsController
            })
            .otherwise({
                redirectTo: "/index"
            });
        // $httpProvider.defaults.useXDomain = true;
        // $httpProvider.defaults.withCredentials = true;
        // delete $httpProvider.defaults.headers.common["X-Requested-With"];
        localStorageServiceProvider.setStorageCookie(1 / 50);
        $httpProvider.interceptors.push('tokenInterceptor');

    }).run(function(appServices) {
        // init event such as routechangestart...
        appServices.init();
    });