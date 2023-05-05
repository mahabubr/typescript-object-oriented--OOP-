"use strict";
// class Animal {
// 	public name: string;
// 	public species: string;
// 	public sound: string;
// 	constructor(name: string, species: string, sound: string) {
// 		this.name = name;
// 		this.species = species;
// 		this.sound = sound;
// 	}
// 	public makeSound() {
// 		console.log(`The ${this.name} says ${this.sound}`); // German Shepherd says Ghew Ghew
// 	}
// }
// Parameter Properties
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`); // German Shepherd says Ghew Ghew
    }
}
const dog = new Animal("German Shepherd", "dog", "Ghew Ghew");
const cat = new Animal("Parsian", "cat", "Meaww Meaww");
dog.makeSound();
cat.makeSound();
cat.name = "Special Cat";
