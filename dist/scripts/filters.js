/*'use strict';

angular.module('blocitoff').filter('expired', ['FBURL', 'taskExpiration', function (FBURL, taskExpiration) {
    return function (Task) {
        var timeNow = new Date().getTime();
        var expired = [];
        if (!Task.done) {
            if (timeNow - Task.timeCreated >taskExpiration) {
                Task.isExpired = true;
                expired.push(Task);
            }
        }
        return expired;
    }
}]);*/