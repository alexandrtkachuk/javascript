
App.service('products', function($http) {
 	
	
	this.getItems= function(callback) { 
		
		  $http.get('api/index.php').success(callback);	
	
	}
  
});


App.controller('iControler',function(products, sCart ,$scope){
	
	
	
	
	var  temp={value: ''}
	this.me=temp;
	
		products.getItems( function(data, status, headers, config) {
			temp.value=data;
        });
	
	this.buy=function(price,id)
	{		
			var obj={
				'price':price,
				'id':id,
				'count': 1
				}
			sCart.addCart($scope,obj);
			//console.log(price);
	}
	
});
