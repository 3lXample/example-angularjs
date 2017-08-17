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
  module.controller('exampleController', ['$scope', 'exampleService1', 'exampleService2', 'exampleService3',
    function exampleController($scope, exampleService1, exampleService2, exampleService3) {
      $scope.title = 'elpmaxE SJralugnA';
      $scope.exam1 = exampleService1.getHeader();
      $scope.exam2 = exampleService2.getHeader();
      $scope.exam3 = exampleService3.getHeader();
    }
  ]);

})();
