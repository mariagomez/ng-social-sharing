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
    'ngTouch',
    '720kb.socialshare'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/720kb', {
        templateUrl: 'views/720kb.html',
        controller: '720kbCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
