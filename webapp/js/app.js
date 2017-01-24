(function() {
  'use strict';

  angular.module('myApp', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
