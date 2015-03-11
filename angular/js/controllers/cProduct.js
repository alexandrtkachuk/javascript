
App.service('getproduct', function($http) {
 	
	
	this.getItem= function(id,callback) { 
		
		  $http.get('api/?id='+id).success(callback);	
	
	}
  
});


App.controller('cProduct',function(getproduct, $stateParams, sCart ,$scope){
	
	
	
	this.value=1;
	
	var  temp={value: ''}
	this.item=temp;
	
		getproduct.getItem($stateParams.id, function (data, status, headers, config) {
			temp.value=data;
        });
	
	
	this.buy=function(count) {
		
			var obj={
				'price':temp.value.price,
				'id':temp.value.id,
				'count': count
				}
			sCart.addCart($scope,obj);
			
			//console.log(val);
	}
	
	
});
