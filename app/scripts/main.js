(function () {
    'use strict';
    angular.module('blocitoff').controller('Main.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        $scope.myData = new Firebase(FBURL);
        $scope.todos = [];
        $scope.addTodo = function () {
            $scope.todos.push({
                'title': $scope.newTodo,
                'done': false
            });
            $scope.newTodo = '';
            $scope.myData.push({todos:$scope.todos});
        };
        $scope.clearCompleted = function (item) {
            $scope.todos = $scope.todos.filter(function(item) {
                return !item.done;
            });
        };
    }]);
}());