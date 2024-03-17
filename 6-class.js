'use strict'

class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage){
        this.#brand = brand;
        this.#model = model;
        this.mileage = mileage;
    }

    set mileage(value){
        this.#mileage = value;
    }

    get mileage(){
        return this.#mileage;
    }

    info(){
        console.log(`Car info - brand: ${this.#brand}, model: ${this.#model}, mileage: ${this.mileage}`)
    }

}