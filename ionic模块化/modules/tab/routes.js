define(function (require) {
    'use strict';
    var routes = angular.module("tab.route", []);
    routes.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'modules/tab/templates/tabs.html'
        });
        $stateProvider.state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'modules/tab/templates/tab-dash.html',
                    controller: 'DashCtrl'
                }
            }
        });
        $stateProvider.state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'modules/tab/templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        });
        $stateProvider.state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'modules/tab/templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        });
        $stateProvider.state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'modules/tab/templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        });
        $urlRouterProvider.otherwise('/tab/dash');
    });
    return routes;
});
