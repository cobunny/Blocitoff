(function () {
    'use strict';
    angular.module('blocitoff').controller('ArchivedTasks.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.Tasks = $firebaseArray(listRef);
        $scope.expired = function (Task) {
            var timeNow = new Date().getTime();
            var expired = [];
            if (!Task.done) {
                if (timeNow - Task.timeCreated > 604800000) {
                    Task.isExpired = true;
                    expired.push(Task);
                }
            }
            return expired;
        };
        $scope.remove = function (archivedTask) {
            $scope.Tasks.$remove(archivedTask);
        };
    }]);
}());