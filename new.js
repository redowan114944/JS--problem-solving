function calculatorMoney(ticketSale){
    if(ticketSale<0){
        return 'invalid number';
    }
    const result = ((120*ticketSale))-(500+(8*50));
    return result;
}