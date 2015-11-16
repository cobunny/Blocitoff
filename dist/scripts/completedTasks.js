(function () {
    'use strict';
    angular.module('blocitoff').controller('CompletedTasks.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        listRef.on('value', function (snapshot, prevChildKey) {
            $scope.completedTasks = snapshot.val();
        });
    }]);
}());