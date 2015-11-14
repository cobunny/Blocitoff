(function () {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.Tasks = $firebaseArray(listRef);
        $scope.newTask = {
            title: '',
            done: false
        };
        $scope.addTask = function () {
            $scope.Tasks.$add($scope.newTask).then(function (data) {
                $scope.newTask.title = '';
            });
        };
        $scope.updateTaskItem = function (Task) {
            $scope.Tasks.$save(Task).then(function (data) {});
        };
        $scope.clearCompleted = function (Task) {
            if (Task.done === true) {
                $scope.Tasks.$remove(Task).then(function () {
                    return !Task.done;
                });
            }
        };
    }]);
}());