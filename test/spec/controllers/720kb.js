'use strict';

describe('Controller: 720kbCtrl', function () {

  // load the controller's module
  beforeEach(module('ngSocialSharingApp'));

  var 720kbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    720kbCtrl = $controller('720kbCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
