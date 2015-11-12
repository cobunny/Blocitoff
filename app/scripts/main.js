(function () {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.todos = $firebaseArray(listRef);
        $scope.newTodo = {
            title: '',
            done: false
        };
        $scope.addTodo = function () {
            $scope.todos.$add($scope.newTodo).then(function (data) {
                $scope.newTodo.title = '';
            });
        };
        $scope.updateTodoItem = function (todo) {
            $scope.todos.$save(todo).then(function (data) {});
        };
        $scope.clearCompleted = function (todo) {
            if (todo.done === true) {
                $scope.todos.$remove(todo).then(function () {
                    return !todo.done;
                });
            }
        };
    }]);
}());