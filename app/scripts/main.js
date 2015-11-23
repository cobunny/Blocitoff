(function () {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.sortorder = 'title';
        $scope.Tasks = $firebaseArray(listRef);
        $scope.newTask = {
            title: '',
            done: false,
            timeCreated: new Date().getTime(),
            isExpired: false
        };

        $scope.expired = function (Task) {
            var timeNow = new Date().getTime();
            var expired = [];
            if (!Task.done) {
                if(timeNow-Task.timeCreated >300000 ) {
                    Task.isExpired = true;
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
            $scope.Tasks.$save(Task).then(function (data) {
                return Task;
            });
        };
    }]);
}());