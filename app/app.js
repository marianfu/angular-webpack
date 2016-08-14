var jquery = require('jquery');
var angular = require('angular');

var app = angular.module('app', ['ui.ace']);
app.controller("controller", ["$scope", require('./js/controllers/codeCtrl')]);
