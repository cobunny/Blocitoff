(function () {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.Tasks = $firebaseArray(listRef);
        $scope.newTask = {
            title: '',
            done: false,
            timeCreated: new Date().getTime()
        };

        $scope.addTask = function () {
            $scope.Tasks.$add($scope.newTask).then(function (data) {
                $scope.newTask.title = '';
            });
        };

        $scope.clearCompleted = function (task) {
            return task.done ? true : false;
        };

        $scope.updateTaskItem = function (Task) {
            $scope.Tasks.$save(Task).then(function (data) {
                $scope.clearCompleted(Task);
                return Task;
            });
        };
    }]);
}());