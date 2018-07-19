var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
$routeProvider
.when('/',
{
controller: 'maincontroller',
templateUrl: 'welcomeView.html'
})
.when('/resultsView',
{
controller: 'resultscontroller',
templateUrl: 'resultsView.html'
})
.when('/aboutView',
{
controller: 'resultscontroller',
templateUrl: 'aboutView.html'
})
.otherwise({ redirectTo: '/'});

$locationProvider.hashPrefix('');
});