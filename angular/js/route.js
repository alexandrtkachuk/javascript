App.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  //urlRouterProvider.otherwise("/");
	  $urlRouterProvider.otherwise("/");
	  $urlRouterProvider.when('/cart', [ 'mCart',function (mCart) {
            //console.log(mCart);
            
            if(mCart.count==0)
            {
					return '/'; //кула перенапрвить если корзина пуста
			}
            
            return false;
		}]);
	
	$stateProvider
		.state('index', {
		  url: "/",
		  templateUrl: "partials/index.html"
		})
	
	
		.state('product', {
		  url: "/product/{id}",
		  controller: "cProduct as cP",
		  templateUrl: "partials/product.html"
		})
  
		.state('cart', {			
		  url: "/cart",
		  controller: "cCart as cC",
		  templateUrl: "partials/cart.html"
		})
		
		
		

  });
