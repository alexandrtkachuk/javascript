var chai=require('chai');
 
 
var expect = chai.expect;


describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect( [1,2,3].indexOf(5)).to.equal(-1);
      //expect.equal(-1, [1,2,3].indexOf(0));
	 //expect(foo).to.be.a('string');
    })
  })
})

