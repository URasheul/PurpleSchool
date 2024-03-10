'use strict'

const Person = function(race, name, language){
    this.race = race;
    this.name = name;
    this.language = language;
    this.talk = function(){
        console.log(`My name is ${this.name}, my language is ${this.language}`);
    }
} 

Person.prototype.orc = {
    weapon : 'sword',
    kick : function(){
        console.log('I kicked!')
    }

}

Person.prototype.elf = {
    magic : 'fireball',
    cast : function(){
        console.log('I cast fireball!')
    }

}