App.controller('first',function(mfac){
	this.mee=mfac.test;
	this.myvar=45;
	this.myvar2='inspan';
	this.myarray= new Array();
	this.myarray[0]=3;
	this.myarray[1]=2;
	
	this.img2='106096084_untitled.png';
	
	
	this.myarray2 = new Array();
	/*
	this.myarray2[0][6] = 2;
	this.myarray2[0][1] = 3;
	this.myarray2[0][2]= 4;
	
	this.myarray2[1][0] = 12;
	this.myarray2[1][1] = 13;
	this.myarray2[1][2]= 14;
	*/
	this.myarray3 = [[4,5,4],[1,2,3]];
	
	
	this.myarray4= function (){
		this.myarray3 = [[4,5,41],[1,2,35]];
	
	}
	function test(){
		
		this.myarray3 = [[4,5,4],[1,2,35]];
	
	}
	
	
	this.nextimg=function()
	{
		
	
	}
	
	
	//this.mee=this.value.mfac.test;
});