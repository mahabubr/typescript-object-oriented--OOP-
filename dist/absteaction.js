"use strict";
// Interface
const vehicle = {
    name: "cat",
    model: "200",
};
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I am Starting Engine");
    }
    stopEngine() {
        console.log("I am Stop Engine");
    }
    move() {
        console.log("I am Move Engine");
    }
    test() {
        console.log("I am for testing");
    }
}
const vehicle1 = new Vehicle("car", "Tesla", 2000);
// Abstract Class
class Vehicle1 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("I am Move Engine");
    }
}
// const car1 = new Vehicle1("Car", "Tesla", 100); // Can Not Create instance
class Car extends Vehicle1 {
    startEngine() {
        console.log("I am starting engine");
    }
    stopEngine() {
        console.log("I am stop engine");
    }
}
