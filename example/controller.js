/**
 * example-angularjs
 * https://github.com/3lXample/example-angularjs
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
(function() {
  'use strict';

  var name   = '3XApp-example';
  var module = angular.module(name);

  // Add Controller
  module.controller('exampleController', ['$scope', 'exampleService1',
    function exampleController($scope, exampleService1) {
      $scope.title = 'elpmaxE SJralugnA';
      $scope.exam1 = exampleService1.getHeader();
    }
  ]);

})();
