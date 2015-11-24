(function () {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', ['$scope', '$firebaseArray', 'FBURL', 'taskExpiration', function ($scope, $firebaseArray, FBURL, taskExpiration) {
        var listRef = new Firebase(FBURL);
        $scope.sortorder = 'priority';
        $scope.Tasks = $firebaseArray(listRef);
        $scope.newTask = {
            title: '',
            done: false,
            timeCreated: new Date().getTime(),
            isExpired: false,
            priority: 'High'
        };

        $scope.expired = function (Task) {
            var timeNow = new Date().getTime();
            var expired = [];
            if (!Task.done) {
                if(timeNow-Task.timeCreated >taskExpiration) {
                    Task.isExpired = true;
                    $scope.Tasks.$save(Task).then(function (data) {});
                    expired.push(Task);
                }
            }
            return expired;
        };

        $scope.addTask = function () {
            $scope.Tasks.$add($scope.newTask).then(function (data) {
                $scope.newTask.title = '';
            });
        };

        $scope.updateTaskItem = function (Task) {
            $scope.Tasks.$save(Task).then(function (data) {});
        };

        $scope.remove = function (Task) {
            $scope.Tasks.$remove(Task);
        };
    }]);
}());