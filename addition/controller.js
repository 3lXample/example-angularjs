/**
 * example-angularjs
 * https://github.com/3lXample/example-angularjs
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
(function() {
  'use strict';

  var name   = '3XApp';
  var module = angular.module(name);

  // Inject dependencies
  AdditionController.$inject = ['$scope', 'userService'];
  // Add addition controller
  module.controller('additionController', AdditionController);

  // AdditionController Class
  function AdditionController($scope, userService) {
    // private variable
    var userID = 0; // last user id used for addition
    var listID = 0; // last user used for addition

    $scope.users = [];

    // Reset and clear table user
    function reset() {
      userID = 0;
      listID = 0;
      $scope.users = [];
    }

    // Get next user for addition
    function getNextUser(callback) {
      userID++;
      listID++;
      if (userID > 10000) {
        userID = 1;
      }
      userService.getById(userID, function getNextUserCallback(user) {
        user.id = listID;
        callback(user);
      });
    }

    // Add user to table user at last row
    function addUser() {
      getNextUser(function addUserCallback(user) {
        $scope.users.push(user);
      });
    }

    // Add user to table user at random row
    function addUserRandom() {
      var length = $scope.users.length;
      var index  = Math.floor(Math.random() * length);
      getNextUser(function addUserCallback(user) {
        $scope.users.splice(index, 0, user);
      });
    }

    // expose this function, so it can be called from ng-click
    $scope.reset         = reset;
    $scope.addUser       = addUser;
    $scope.addUserRandom = addUserRandom;

    // Initialize page
    reset();
  }
})();
