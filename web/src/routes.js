(function(){
    'use strict';
angular.module('manonRestaurant')
    .config(function ($stateProvider,$locationProvider, $urlRouterProvider) {

        var controllerDir = "src/controllers/";

        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: controllerDir + 'home/home.html?v=1',
                controller: 'HomeCtrl as vm'
            })
            .state('Menu', {
                url: '/menu',
                templateUrl: controllerDir + 'menu/menu.html?v=1',
                controller: 'MenuCtrl as vm'
            })
            .state('Contact', {
                url: '/contact',
                templateUrl: controllerDir + 'contact/contact.html?v=1',
                controller: 'MenuCtrl as vm'
            });

            $urlRouterProvider.otherwise('/');

    //     $locationProvider.html5Mode(true);


    });
})();