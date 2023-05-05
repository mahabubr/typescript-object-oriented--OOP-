class BankAccount1 {
	public readonly id: number;
	public name: string;
	private _balance: number;

	constructor(id: number, name: string, balance: number) {
		this.id = id;
		this.name = name;
		this._balance = balance;
	}

	// Getter
	get balance(): number {
		return this._balance;
	}

	// Setter
	set deposit(amount: number) {
		this._balance = this._balance + amount;
	}
}

const myAccount1 = new BankAccount1(44, "Parsian", 40);
console.log(myAccount1.balance);
myAccount1.deposit = 20;
console.log(myAccount1.balance);
