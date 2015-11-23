(function () {
    'use strict';
    angular.module('blocitoff').controller('CompletedTasks.controller', ['$scope', '$firebaseArray', 'FBURL', function ($scope, $firebaseArray, FBURL) {
        var listRef = new Firebase(FBURL);
        $scope.Tasks = $firebaseArray(listRef);
        $scope.sortorder = 'priority';
        $scope.incompleted = function(completedTask) {
            completedTask.done = false;
            $scope.Tasks.$save(completedTask).then(function(data) {
            });
        }
    }]);
}());