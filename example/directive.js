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

  // Add directive
  module.directive('example', ['exampleConstant', 'exampleValue',
    function ExampleDirectiveFactory(exampleConstant, exampleValue) {
      return {
        restrict: 'E',
        scope: {},
        link: function($scope, $element) {
          $element.text(exampleConstant + ' [' + exampleValue + ']');
        }
      }
    }
  ]);

})();
