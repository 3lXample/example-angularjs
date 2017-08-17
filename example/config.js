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

  // Config service provider exampleService4
  module.config(['exampleService4Provider', 'exampleConstant',
    function exampleService4ProviderConfig(exampleService4Provider, exampleConstant) {
      exampleService4Provider.setBanner(exampleConstant);
    }
  ]);

})();
