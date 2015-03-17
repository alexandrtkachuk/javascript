"use strict"
		
		var meKey=new Array();
		var arr = new Array();
		
		if( typeof(window.localStorage.me) == "string")
		{
			arr=$.parseJSON('[' + window.localStorage.me+ ']');
			arr=arr[0];
			view();
		}
		
		
		var root = 'http://jsonplaceholder.typicode.com';
	
	
		function  getRes(id ,sel){
		
			$.ajax({
			 url: root + '/'+sel+'/'+id.toString(),
			 method: 'GET'
			}).then(function(data) {
				if(window.localStorage.sel!=sel)
				{
					//console.log(window.localStorage.sel);
					arr = new Array(); 
					meKey = new Array();
				}
				window.localStorage.sel=sel;
				
				
				
				
				arr.push(data);
				window.localStorage.me=JSON.stringify(arr);
				
				view();
			});
		}
		
		function showMe(data,v) { 
			
			var res="";
			//var w=(100/Object.keys(data).length); //вычисляем размер 
			
			//console.log(Object.keys(data).length);
			
			
			
			var sdiv='<'+v+'>';
			var ediv="</"+v+">";
			$.each(data, function(key ,value) {
			
					if('object'==typeof(value)) {
						//console.log(key);
						addKey(key);
						res+=sdiv+'<ul>'+showMeLi(value)+'</ul>'+ediv;
					 }
					 else {
						res+=sdiv+value+ediv;
						//console.log(key);
						addKey(key);
					 }
						 
			});
			
			return res;
		}
		
		
		
		function showMeLi(data) { 
			
			var res="";
			var sdiv='<li>';
			var ediv='</li>';
			$.each(data, function(key ,value) {
			
					if('object'==typeof(value)) {
						
						res+=sdiv+'<ul>'+showMeLi(value)+'</ul>'+ediv;
					 }
					 else {
						res+=sdiv+key+':'+value+ediv;
						//console.log(key);
						
					 }
						 
			});
			
			return res;
		}
		
		
		function addKey(key) {
				if(meKey.indexOf(key)==-1) {
					meKey.push(key);
				}

				console.log( key);
				
		
		}
		
		function view(){
		
			var head='';
			var body='';
				
				$.each(arr, function(key ,value){
						if(typeof(value[0])=='undefined'){
							body+='<tr>'+showMe(value,'td')+'</tr>';
						 }
						 else {
							$.each(value, function(key2 ,value2){
								body+='<tr>'+showMe(value2,'td')+'</tr>';
								//console.log(value2);
							});
						 }
						 //console.log(key+'='+typeof(value[0]));
				});
				
				 head="<thead>  <tr>"; 
				 
				 for(var i=0 ;i<meKey.length;i++ ) {
					//console.log(meKey[i]);
				
					head+='<td>'+meKey[i]+'</td>';
				}
				
				head+="</tr> </thead>";
				//console.log(meKey);
				
				$('#myrow').html(head+body);

		}		
		function go()
		{
			//console.log($('#num').val());
			var id =$('#num').val();
			
			var sel=$('#sel option:selected').text();

			getRes(id,sel);
		}