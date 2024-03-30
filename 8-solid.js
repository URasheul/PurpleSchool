'use strict'

class Billing{
    amount = 10;
    calculateTotal(){
        return this.total 
    }
}

class FixBilling extends Billing{
   
    get total(){
        return  this.amount;
    }
}

class HourBilling extends Billing{    

    constructor(hour){
        super();
        this.hour = hour;
    }

    get total(){
        return this.amount * this.hour;
    }
}

class ItemBilling extends Billing {
    
    constructor(itemsNumber){
        super();
        this.itemsNumber = itemsNumber;
    }
    
    get total(){
        return this.amount * this.itemsNumber;
    }
}

