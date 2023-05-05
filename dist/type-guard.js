"use strict";
// keyof Guard
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add("1", "2");
add(1, 2);
const normalUser = { name: "Mr Tony" };
const adminUser = { name: "Mr Stark", role: "admin" };
function getUser(user) {
    if ("role" in user) {
        return `I am ${user.role}`;
    }
    else {
        return "I am normal user";
    }
}
console.log(getUser(adminUser));
// instance of Guard
class Animal2 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am Making Sound");
    }
}
class Dogs extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("I am Barking");
    }
}
class Cat extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log("I am Mewing");
    }
}
const animal1 = new Dogs("Garman", "dog"); // Instance -> Dog
const animal2 = new Cat("Persian", "cat"); // Instance -> Cat
function getAnimal(animal) {
    if (animal instanceof Dogs) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
}
getAnimal(animal2);
// Another Way
function isDog(animal) {
    return animal instanceof Dogs;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal2(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
}
