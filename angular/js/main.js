var App=angular.module('myshop',[]);




App.controller('iControler',function($scope, $http){
	
	$http.get('http://192.168.56.20/json/').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
	
	
});
