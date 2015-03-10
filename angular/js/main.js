var App=angular.module('myshop',[]);




App.controller('iControler',function($scope, $http){
	
	$http.get('http://www.assembler.wc.lt/test/').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
	
	
});