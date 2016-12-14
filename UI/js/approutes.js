var seriesApp = angular.module('seriesApp',['ngRoute']);
seriesApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../views/arabic-series.html'
    }).when('/arabic-series',{
        templateUrl:'../views/arabic-series.html'
    }).when('/turkish-series',{
        templateUrl:'../views/turkish-series.html'
    }).when('/indian-series',{
        templateUrl:'../views/indian-series.html'
    }).when('/american-series',{
        templateUrl:'../views/american-series.html'
    }).when('/indian-series',{
        templateUrl:'../views/indian-series.html'
    }).when('/video-show',{
        templateUrl:'../views/video-show.html'
    }).otherwise({
        redirectTo:'/'
    });
});

