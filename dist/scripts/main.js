(function () {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.list = $firebaseArray(listRef);
        $scope.todos = [];
        $scope.addTodo = function () {
            $scope.todos.push({
                'title': $scope.newTodo,
                'done': false
            });
            $scope.newTodo = '';
            $scope.list.$add($scope.todos);
        };
        $scope.clearCompleted = function (item) {
            $scope.todos = $scope.todos.filter(function (item) {
                return !item.done;
            });
        };
    }]);
}());