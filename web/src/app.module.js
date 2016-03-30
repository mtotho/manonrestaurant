'use strict';

angular.module('manonRestaurant', [
        'ngSanitize',
        'ui.router',
        'angular.filter'
    ])
    .config(function ($httpProvider) {


}).run(function($rootScope, $window, $location) {
        // when the page refreshes, check if the user is already logged in


    });

angular.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null
};
$(document).ready(function(){
  /*  var headerheight=$("header").outerHeight();

    var windowheight=$(window).outerHeight();

    var targetheight = windowheight - (headerheight );

    console.log(targetheight);

    //$(".name_panel").width(namewidth);


    $("#content").height(targetheight);*/
});

