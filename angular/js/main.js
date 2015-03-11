var App=angular.module('myshop',[]);




App.service('products', function() {
  /*
  $http.get('http://192.168.56.20/json/').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  */
  
	this.getItems= function($http, $scope) { 
		  //var ret;
		  $http.get('http://assembler.wc.lt/test/').
		  success(function(data, status, headers, config) {
			  $scope.posts = data;
			}).
			error(function(data, status, headers, config) {
			  // log error
			});
		
			
	
	}
	
  
});


App.controller('iControler',function(products,$http, $scope){
	
	
	
		
	products.getItems($http, $scope);
	
	
	
});
