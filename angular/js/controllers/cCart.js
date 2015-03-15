App.controller('cCart',function(mCart){
	
	   
	   mCart.getLS();
	   
	   this.cart=mCart;
		
	   this.items=mCart.arr;
		
		
		this.total= function ()
		{
			var total = 0;
			this.items.forEach(function(item) {
				total += item.el.price * item.count;
			})
			mCart.setLS();
			return total;
		}
		
		this.remove = function (index){
			
			mCart.del(index);
			//console.log(index);
		}
		
});
