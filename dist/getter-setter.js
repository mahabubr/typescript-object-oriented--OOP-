"use strict";
class BankAccount1 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // Getter
    get balance() {
        return this._balance;
    }
    // Setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount1 = new BankAccount1(44, "Parsian", 40);
console.log(myAccount1.balance);
myAccount1.deposit = 20;
console.log(myAccount1.balance);
