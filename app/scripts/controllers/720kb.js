'use strict';

/**
 * @ngdoc function
 * @name ngSocialSharingApp.controller:720kbCtrl
 * @description
 * # 720kbCtrl
 * Controller of the ngSocialSharingApp
 */
angular.module('ngSocialSharingApp')
  .controller('720kbCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.currentUrl = $location.path();
  });
