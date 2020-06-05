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

  // User Model
  function User(id, firstName, lastName, phone, dob) {
    this.id        = id;
    this.firstName = firstName;
    this.lastName  = lastName;
    this.phone     = phone;
    this.dob       = dob;
  }

  // UserList Model
  function UserList(users, page) {
    this.users = users;
    this.page  = page;
  }

  // Add userService as service
  module.service('userService', ['$http', UserService]);

  // UserService Class
  function UserService($http) {
    // User list cache
    var users;

    // Function to get user list from api and cache it
    function getUsers(callback) {
      // If cache is undefined then get data from api, otherwise use cache
      if (users === undefined) {
        // Beware: if not use absolute URL, it will be relative to current page url location.
        // So it will not relative to this file
        $http.get('_api/user.json').then(
          function success(response) {
            users = response.data.users;
            callback(users);
          },
          function error(response) {
            users = [];
            callback(users);
          });
      } else {
        callback(users);
      }
    }

    // Function for clone object user to new object, so we not expose our cache object to outside
    function cloneUser(source) {
      return new User(source.id, source.firstName, source.lastName, source.phone, source.dob);
    }

    // function for get user by id
    // user id start from 1, while array index start from 0
    // because user list in json is sorted by id asc
    // so we can use id = index + 1
    function getById(id, callback) {
      var index = id - 1;
      getUsers(function getByIdCallback(users) {
        callback(cloneUser(users[index]));
      });
    }

    // Function for get current page user list
    // total users per page is 100
    function getByPage(page, callback) {
      // get user list and process with callback
      getUsers(function getByPageCallback(users) {
        var result = [];
        var start  = (page - 1) * 100;
        var i = 0;
        while (i < 100) {
          result.push(cloneUser(users[start + i]));
          i++;
        }
        callback(new UserList(result, page));
      });
    }

    // expose function to outside
    this.getById   = getById;
    this.getByPage = getByPage;
  }

})();
