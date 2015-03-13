App.controller('cCart',function(mCart){
	
		
	   this.cart=mCart;
		
	   this.items=mCart.arr;
		
		
		this.total= function ()
		{
			var total = 0;
			this.items.forEach(function(item) {
				total += item.el.price * item.count;
			})

			return total;
		}
		
		this.remove = function (index){
			
			this.items.splice(index,1);
			//console.log(index);
		}
		
});
