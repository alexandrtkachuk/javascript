var App=angular.module('myname',[]);


App.factory('mfac', function(){

	var a=[];
	a.test=123;
	return a;

});


 
App.directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: 'false',
      template: '<h3>Hello World!!</h3>'
  };
});