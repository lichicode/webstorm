var lazyConfig = {
    modules: ['ionic', 'ngCordova'],
    required : [],
    resources: {}
};

lazyModules.forEach(function (module) {
    APPUtil.getFileData("modules/" + module + "/config.json",function(config){
        config = JSON.parse(config);
        for(var name in config){
            lazyConfig.modules.push(name);
            lazyConfig.required.push(name);
            lazyConfig.resources[name] = "modules/" + module + "/" + config[name];
        }
    });
});

require.config({
    paths: lazyConfig.resources
});

define(lazyConfig.required, function (dtapp) {
    'use strict';
    var app = angular.module('dtapp', lazyConfig.modules);
    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
    angular.bootstrap(document,['dtapp']);
});