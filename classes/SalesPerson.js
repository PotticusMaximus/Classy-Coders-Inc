const { Employees } = require("./Employees");

class SalesPerson extends Employees {
  #totalSales;
  constructor(name, position, salary, clients = []) {
    //
    super(name, position, salary);
    this.#totalSales = 0;
    this.clients = clients;
  }
  getSalesNumber() {
    return this.#totalSales;
  }
  findClient(client) {
    let result;
    let found = false;
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i] == client) {
        result = this.clients[i];
        found = true;
      }
    }
    if (found === true) {
      console.log(`found client ${result}`);
    } else {
      console.log(`Not found client with name ${client}`);
    }
  }
  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
  SalesPerson,
};
