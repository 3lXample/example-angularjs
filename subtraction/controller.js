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
  SubtractionController.$inject = ['$scope', 'userService'];
  // Add subtraction controller
  module.controller('subtractionController', SubtractionController);

  // SubtractionController Class
  function SubtractionController($scope, userService) {
    // private variable
    var userID = 100; // last user id used for addition
    var listID = 100; // last user used for addition

    $scope.users = [];
    $scope.count = 0;

    // Reset and update table user to initial state
    function reset() {
      userID = 100;
      listID = 100;
      $scope.count = 0;
      userService.getByPage(1, function resetCallback(userList) {
        $scope.users = userList.users;
      });
    }

    // Get next user for subtraction
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

    // Add user to table at last row
    function addUserAtLast() {
      getNextUser(function subFirstCallback(user) {
        $scope.users.push(user);
      });
    }

    // Subtract first row from table user and add user to table at last row
    function subFirst() {
      $scope.count++;
      $scope.users.shift();
      addUserAtLast();
    }

    // Subtract last row from table user and add user to table at last row
    function subLast() {
      $scope.count++;
      $scope.users.pop();
      addUserAtLast();
    }

    // Subtract random row from table user and add user to table at last row
    function subRandom() {
      var index = Math.floor(Math.random() * 100);
      $scope.count++;
      $scope.users.splice(index, 1);
      addUserAtLast();
    }

    // expose this function, so it can be called from ng-click
    $scope.reset     = reset;
    $scope.subFirst  = subFirst;
    $scope.subLast   = subLast;
    $scope.subRandom = subRandom;

    // Initialize page
    reset();
  }

})();
