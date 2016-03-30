'use strict';

angular.module('manonRestaurant')
    .controller('AppCtrl', function ($rootScope,$scope, $state) {
        var vm=this;

        vm.selectedTab = 0;

        $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
            vm.CurrentState = toState;
        });
    });

