describe('updating total payments and percentage', function(){
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    it('should add new amount to total payment', function(){
        updateServerTable();
        sumPaymentTotal();
        expect(tipAverage.value).not.toEqual(0);
      })
    })
})
    //I need additional help with this