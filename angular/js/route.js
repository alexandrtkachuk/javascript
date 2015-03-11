App.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  //urlRouterProvider.otherwise("/");
	  $urlRouterProvider.otherwise("/");
	  
	
	$stateProvider
		.state('index', {
		  url: "/",
		  controller: "iControler as ic",
		  templateUrl: "partials/index.html"
		})
	
	
		.state('product', {
		  url: "/product/{id}",
		  controller: "cProduct as cP",
		  templateUrl: "partials/product.html"
		})
  
  });
