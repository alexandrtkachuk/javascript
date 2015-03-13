var App=angular.module('myshop',['ui.router']);



App.factory('mCart', function() {
  
  
  var cart={"count":0,
	  "arr": new Array(),
	  "add": null
	  };
  
  
  
  cart.add=function (obj){
	  
	  
		var test=true;
		
		this.arr.forEach(function(entry) {
			if(null!==entry){
				if(entry.el.id==obj.el.id){ 
					if(entry.count==obj.count) {
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
		
			this.arr.push(obj);
		}
		
		
		
		
		this.count=this.arr.length;	
		
		console.log(this.arr);
		//in store
		//window.localStorage.taishop=JSON.stringify(vCart);
	  
	  }
  
  return cart;
  
  
});




//глобальная корзина
App.controller('gCart',function($scope ,mCart){
		
	
	
	
	
	
	/*
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
	
	*/
	
	
	//
	//window.localStorage.tai=JSON.stringify(vCart);
	
});
