
App.service('products', function($http) {
 	
	
	this.getItems= function(callback) { 
		
		  $http.get('api/index.php').success(callback);	
	
	}
  
});


App.controller('iControler',function(products, mCart ,$scope){
	
	
	
	
	var  temp={value: ''}
	this.me=temp;
	
		products.getItems( function(data, status, headers, config) {
			temp.value=data;
			//console.log(data[0]);
        });
	
	
	
	
	
	
	this.buy=function(ind)
	{		
		
			
			var obj={
				'el':this.me.value[ind],
				'count': 1
				}
			mCart.add(obj);
			
			//console.log(this.me.value[ind]);
			
	}
	
});
