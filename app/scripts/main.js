(function() {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', function($scope,$firebaseArray) {
        var list = $firebaseArray(new Firebase("https://ng-blocitoff.firebaseio.com/"));
        list.$add({done:false, text:'first'},{done:false, text:'second'}).then();
        $scope.list = list;
    });
}());