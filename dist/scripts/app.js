angular
    .module('blocitoff', ['firebase', 'ui.router'])
    .constant('FBURL', 'https://ng-blocitoff.firebaseio.com/')
    .value('taskExpiration', '604800000')
    .config(function ($stateProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider.state('main', {
            url: '/',
            controller: 'Main.controller',
            templateUrl: '/templates/main.html'
        });
        $stateProvider.state('devise', {
            url: '/devise',
            controller: 'Devise.controller',
            templateUrl: '/templates/devise.html'
        });
        $stateProvider.state('layouts', {
            url: '/layouts',
            controller: 'Layouts.controller',
            templateUrl: '/templates/layouts.html'
        });
        $stateProvider.state('archivedTasks', {
            url: '/archivedTasks',
            controller: 'ArchivedTasks.controller',
            templateUrl: '/templates/archivedTasks.html'
        });
        $stateProvider.state('completedTasks', {
            url: '/completedTasks',
            controller: 'CompletedTasks.controller',
            templateUrl: '/templates/completedTasks.html'
        });
    });