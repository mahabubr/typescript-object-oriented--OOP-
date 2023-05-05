class Parent {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	makeSleep(hours: number): string {
		return `This ${this.name} will sleep for ${hours}`;
	}
}

class Student extends Parent {
	constructor(name: string, age: number, address: string) {
		super(name, age, address);
	}
}

const student1 = new Student("Mr x", 20, "New York");
student1.age;

class Teacher extends Parent {
	designation: string;

	constructor(name: string, age: number, address: string, designation: string) {
		super(name, age, address);
		this.designation = designation;
	}
    
	takeClasses(numOfClass: number): string {
		return `this ${this.name} will take ${numOfClass}`; // Different
	}
}

const teacher1 = new Teacher("Mr Y", 54, "UK", "Professor");
teacher1.designation;

// -------------------------------------------------------------

// class Student {
// 	name: string;
// 	age: number;
// 	address: string;

// 	constructor(name: string, age: number, address: string) {
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	makeSleep(hours: number): string {
// 		return `This ${this.name} will sleep for ${hours}`;
// 	}
// }

// class Teacher {
// 	name: string;
// 	age: number;
// 	address: string;
// 	designation: string; // Different

// 	constructor(name: string, age: number, address: string, designation: string) {
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 		this.designation = designation;
// 	}

// 	makeSleep(hours: number): string {
// 		return `This ${this.name} will sleep for ${hours}`;
// 	}

// 	takeClasses(numOfClass: number): string {
// 		return `this ${this.name} will take ${numOfClass}`; // Different
// 	}
// }
