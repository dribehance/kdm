 // by dribehance <dribehance.kksdapp.com>
 // EventHandle
 angular.module("KDM").factory("appServices", function($rootScope, $window, $location, geoServices, userServices, localStorageService, errorServices, toastServices, platformServices, config) {
     var routeChangeStart = function(e) {
         // do something white routechangestart,eg:
         // toastServices.show();
     }
     var routeChangeSuccess = function(e, currentRoute, prevRoute) {
         // do something white routechangesuccess,eg:
         toastServices.hide();
         errorServices.hide();
         navBarHandler(e, currentRoute, prevRoute);
     }
     var routeChangeError = function(e, currentRoute, prevRoute) {
         // do something white routechangesuccess,eg:
         // $rootScope.back();
     }
     var navBarHandler = function(e, currentRoute, prevRoute) {
         // handle navbar
         var _navbars_b = ["/index", "/second", "/third", "/"];
         if (_navbars_b.contains($location.path())) {
             $rootScope.navbar.bottom = true;
         } else {
             $rootScope.navbar.bottom = false;
         }
         var _navbars_t = ["/bonus", "/bonus/", "/bonus/received", "/bonus/paid"];
         if (_navbars_t.contains($location.path())) {
             $rootScope.navbar.top = false;
         } else {
             $rootScope.navbar.top = true;
         }
         // handle second tab
         $rootScope.CURRENT_PATH = $location.path();
     }
     var onBackKeyDown = function() {
         $rootScope.$apply(function() {
             $rootScope.back();
         });
     }
     return {
         init: function() {
             // native app handle
             platformServices.init();
             // handle browser backkeydown
             if (!platformServices.isNative()) {
                 // handle android backkeydown
                 document.addEventListener("backbutton", onBackKeyDown, false);
                 // backaction
                 $rootScope.back = function() {
                     $window.history.back();
                 }
             }

             // init navbar 
             $rootScope.navbar = {
                 top: true,
                 bottom: true
             };
             $rootScope.geoposition = {
                 coords: {
                     latitude: "22.567061",
                     longitude: "113.867011"
                 }
             }
             geoServices.position().then(function(data) {
                 $rootScope.geoposition = data;
             })
             userServices.sync();
             $rootScope.staticImageUrl = config.imageUrl;
             // {2:rootScope} binding
             $rootScope.$on("$routeChangeStart", routeChangeStart);
             $rootScope.$on("$routeChangeSuccess", routeChangeSuccess);
             $rootScope.$on("$routeChangeError", routeChangeError);
         }
     }
 });