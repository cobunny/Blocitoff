(function () {
    'use strict';
    angular.module('blocitoff').controller('ArchivedTasks.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.Tasks = $firebaseArray(listRef);
        $scope.sortorder = 'priority';
        $scope.activate = function(archivedTask) {
            var timeNow = new Date().getTime();
            archivedTask.timeCreated = new Date().setTime(timeNow);
            archivedTask.isExpired = false;
            $scope.Tasks.$save(archivedTask).then(function(data) {
            });     
        }
    }]);
}());