angular.module('agricall', ['ngRoute'])
    .controller("HomeController", function ($scope, $http) {

    })
    .controller("SoybeanController", function ($scope, $http) {
        const hoje = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let formatted = hoje.toLocaleDateString('pt-BR', options);
        $scope.today = formatted;

    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/soybean', {
                templateUrl: 'views/soybean.html',
                controller: 'SoybeanController'
            })
            .when('/corn', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })
            .when('/cattle', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })
            .when('/notify', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    