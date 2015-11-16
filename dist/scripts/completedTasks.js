(function () {
    'use strict';
    angular.module('blocitoff').controller('CompletedTasks.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.Tasks = $firebaseArray(listRef);
        $scope.remove = function (completedTask) {
            $scope.Tasks.$remove(completedTask);
        }; 
    }]);
}());