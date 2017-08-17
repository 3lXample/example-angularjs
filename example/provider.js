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

  // Add Constants
  module.constant('exampleConstant', 'built by Anisetus Elly Efendi');

  // Add Values
  module.value('exampleValue', 'AngularJS 1.6.5');

})();
