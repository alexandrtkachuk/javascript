var App=angular.module('myshop',['ui.router']);




App.value('vCart', {
  
  total:0,
  "arr": new Array()
});



App.service('sCart', function(vCart) {
 	
	
	this.addCart=function($scope,obj){
		
		
		//console.log(vCart.total);
		
		vCart.arr[obj.id]=obj;
		vCart.total=0;
		vCart.arr.forEach(function(entry) {
			//console.log(entry);
			if(null!==entry){
				vCart.total+=(entry.count*entry.price);
				}
			
		});	
		
			
		//in store
		window.localStorage.tai=JSON.stringify(vCart);
	}
  
});

//глобальная корзина
App.controller('gCart',function($scope ,vCart){
		
	
	
	
	
	$scope.cart=vCart;
	var t;
	
	if( typeof(window.localStorage.tai) == "string")
		{
			var arr= $.parseJSON('[' + window.localStorage.tai+ ']');
			//console.log(vCart);
			
			if(arr!=0) {
				vCart.total=arr[0].total;
				vCart.arr=arr[0].arr;
			}
			//console.log(arr[0]);
		}
		
	//window.localStorage.tai=0;
	//
	//window.localStorage.tai=JSON.stringify(vCart);
	
});
