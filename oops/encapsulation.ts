class BankAccount {
  private accBalance: number = 0;

  constructor() {
    this.accBalance = 0;
  }

  deposit(fund: number): number {
    return this.accBalance + fund;
  }

  withdraw(fund: number): number {
    return this.accBalance + fund;
  }
  //standard comment

  //getter for private variable
  getBalance(balance: number): number {
    return this.accBalance;
  }
}
