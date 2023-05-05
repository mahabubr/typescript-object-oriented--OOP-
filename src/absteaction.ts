// Interface

interface IVehicle {
	name: string;
	model: string;
}
const vehicle: IVehicle = {
	name: "cat",
	model: "200",
};

// Example With Class

interface IVehicle1 {
	startEngine(): void;
	stopEngine(): void;
	move(): void;
}

class Vehicle implements IVehicle1 {
	constructor(
		public name: string,
		public brand: string,
		public model: number
	) {}

	startEngine(): void {
		console.log("I am Starting Engine");
	}
	stopEngine(): void {
		console.log("I am Stop Engine");
	}

	move(): void {
		console.log("I am Move Engine");
	}

	test() {
		console.log("I am for testing");
	}
}

const vehicle1 = new Vehicle("car", "Tesla", 2000);

// Abstract Class

abstract class Vehicle1 {
	constructor(
		public name: string,
		public brand: string,
		public model: number
	) {}

	abstract startEngine(): void;
	abstract stopEngine(): void;

	move(): void {
		console.log("I am Move Engine");
	}
}

// const car1 = new Vehicle1("Car", "Tesla", 100); // Can Not Create instance

class Car extends Vehicle1 {
	startEngine(): void {
		console.log("I am starting engine");
	}
	stopEngine(): void {
		console.log("I am stop engine");
	}
}
