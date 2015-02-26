
 
 var chai=require('chai');
 
 
  var expect = chai.expect;
  
 var i = 1;
		  
		  function run() { 
			
			timer = setTimeout(run, 2000);
			
			dateObj = new Date();
			//console.log(i++);
			console.log(dateObj.getTime());
			
		  }

		  var timer = setTimeout(run, 2000);

	
			  
			  
			  
			  
			  
			  var i=0;
			  function meGo() {
					i++;
					console.log(i);
					console.log(dateObj.getTime());
				}
				
				dateObj = new Date();
				