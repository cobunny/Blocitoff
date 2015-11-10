angular.module('blocitoff', ['firebase','ui.router']);

angular.module('blocitoff').config(function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider.state('main', {
        url: '/main',
        controller: 'Main.controller',
        templateUrl: 'templates/main.html'
    });
    $stateProvider.state('devise', {
        url: '/devise',
        controller: 'Devise.controller',
        templateUrl: 'templates/devise.html'
    });
    $stateProvider.state('layouts', {
        url: '/layouts',
        controller: 'Layouts.controller',
        templateUrl: 'templates/layouts.html'
    });
    $stateProvider.state('lists', {
        url: '/lists',
        controller: 'Lists.controller',
        templateUrl: 'templates/lists.html'
    });
    $stateProvider.state('tasks', {
        url: '/tasks',
        controller: 'Tasks.controller',
        templateUrl: 'templates/tasks.html'
    });
});
