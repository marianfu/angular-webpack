var jquery = require('jquery');
var angular = require('angular');
//require('ui.ace');

var myApp = angular.module('myApp', ['ui.ace']);
myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
myApp.controller("controller", ["$scope", require('./js/controllers/codeCtrl')]);
