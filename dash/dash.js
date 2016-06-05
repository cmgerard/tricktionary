'use strict';

var app = angular.module('trick.dash', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dash', {
    templateUrl: 'dash/dash.html',
    controller: 'DashCtrl'
  });
}])

.controller('DashCtrl', function($scope, $firebaseArray, Auth) {
  var ref = firebase.database().ref();
  // create a synchronized array
  $scope.data = $firebaseArray(ref);
});
