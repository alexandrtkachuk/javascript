var App=angular.module('myshop',['ui.router']);




App.value('vCart', {
  
  total:0,
  "arr": new Array()
});



App.service('sCart', function(vCart) {
 
	
	this.addCart=function($scope,obj){
		
		
		var test=true;
		
		vCart.arr.forEach(function(entry) {
			if(null!==entry){
				if(entry.id==obj.id){ 
					if(entry.count==obj.count) {
						//entry.count=10;
						test=false;
						return;
					}
					else {
						entry.count=obj.count;
						test=false;
						return;
					}
				}
			}
		});
		
		if(test===true){
		
			vCart.arr.push(obj);
		}
		
		
		console.log(vCart.arr);
		vCart.total=0;
		vCart.arr.forEach(function(entry) {
			console.log(entry);
			if(null!==entry){
				vCart.total+=(entry.count*entry.price);
				}
			
		});	
		
			
		//in store
		//window.localStorage.taishop=JSON.stringify(vCart);
	}
  
});

//глобальная корзина
App.controller('gCart',function($scope ,vCart){
		
	
	
	
	
	$scope.cart=vCart;
	var t;
	
	if( typeof(window.localStorage.taishop) == "string")
		{
			var arr= $.parseJSON('[' + window.localStorage.taishop+ ']');
			//console.log(vCart);
			
			if(arr!=0) {
				vCart.total=arr[0].total;
				vCart.arr=arr[0].arr;
			}
			//console.log(arr[0]);
		}
		
	window.localStorage.taishop=0;
	//
	//window.localStorage.tai=JSON.stringify(vCart);
	
});
