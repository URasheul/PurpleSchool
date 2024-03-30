'use strict'
class Person{

    constructor(race, name, language){
        this.race = race;
        this.name = name;
        this.language = language;
    }

    talk(){
        console.log(`My name is ${this.name}, my language is ${this.language}`)
    }

}

class Orc extends Person{
    constructor(race, name, language, weapon){
        super(race, name, language);
        this.weapon = weapon;
    }

    strike(){
        console.log(`i am ${this.race}, i hit you by ${this.weapon}`)
    }

    talk(){
        console.log(`Hello , i am Orc`)
    }
}

class Elf extends Person{
    constructor(race, name, language, magic){
        super(race, name, language);
        this.magic = magic;
    }

    cast(){
        console.log(`i am ${this.race}, i cast my ${this.magic}`)
    }

    talk(){
        console.log(`Hello , i am Elf`)
    }
}