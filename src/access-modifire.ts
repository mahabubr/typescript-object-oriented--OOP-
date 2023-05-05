class BankAccount {
	public readonly id: number;
	public name: string;
	// private _balance: number;
	protected _balance: number;

	constructor(id: number, name: string, balance: number) {
		this.id = id;
		this.name = name;
		this._balance = balance;
	}

	getBalance() {
		console.log(`My Current Balance is ${this._balance}`);
	}
	addDeposit(amount: number) {
		this._balance = this._balance + amount;
	}
}

class StudentAccount extends BankAccount {
	test() {
		this._balance;
	}
}

const myAccount = new BankAccount(44, "Parsian", 20);
// myAccount.balance = 0;
console.log(myAccount.getBalance());
console.log(myAccount.addDeposit(20));
