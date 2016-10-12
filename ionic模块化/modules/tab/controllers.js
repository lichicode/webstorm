define(function(require){
    'use strict';
    var controllers = angular.module("tab.controller", []);
    controllers.controller('DashCtrl', function($scope) {});
    controllers.controller('ChatsCtrl', function($scope, Chats, $cordovaCamera) {
        $scope.chats = Chats.all();
        $scope.takePhoto = function(chat){
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType:Camera.EncodingType.JPEG,
                targetWidth: 200,
                targetHeight: 200,
                mediaType:0,
                cameraDirection:0,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: true
            };
            $cordovaCamera.getPicture(options).then(function(imageData) {
                chat.face = imageData;
            }, function(err) {
                alert(err);
            });
        };
    });
    controllers.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    });
    controllers.controller('AccountCtrl', function($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
    return controllers;
});
