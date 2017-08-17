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

  // Add Filter
  module.filter('reverse', function() {
    return function filterReverse(value) {
      var input = value || '';
      var out   = '';
      for (var i = 0; i < input.length; i++) {
        out = input.charAt(i) + out;
      }
      return out;
    };
  })

})();
