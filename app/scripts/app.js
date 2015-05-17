'use strict';

/**
 * @ngdoc overview
 * @name ngSocialSharingApp
 * @description
 * # ngSocialSharingApp
 *
 * Main module of the application.
 */
angular
  .module('ngSocialSharingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
