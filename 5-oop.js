'use strict'

const Person = function(race, name, language){
    this.race = race;
    this.name = name;
    this.language = language;
    this.talk = function(){
        console.log(`My name is ${this.name}, my language is ${this.language}`);
    }
} 

const Orc = function(race, name, language, weapon){
    Person.call(this, race, name, language)
    this.weapon = weapon;
    this.kick = function(){
        console.log('I kicked!')
    }    
}

Orc.prototype = Object.create(new Person);
Orc.prototype.constructor = Orc;

const Elf = function(race, name, language, magic){
    Person.call(this, race, name, language)
    this.magic = magic;
    this.cast = function(){
        console.log('I cast spell!')
    }    
}

Elf.prototype = Object.create(new Person);
Elf.prototype.constructor = Orc;