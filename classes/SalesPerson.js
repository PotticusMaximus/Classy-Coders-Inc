const { Employees } = require("./Employees");

class SalesPerson extends Employees {
  #totalSales;
  constructor(name, position, salary, clients) {
    //
    super(name, position, salary);
    this.#totalSales = 0;
    this.clients = [];
  }
  getSalesNumber() {
    return this.#totalSales;
  }
  findClient(client) {
    let result = "";
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i] == client) {
        result = this.clients[i];
      }
    }
    return result;
  }
  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
  SalesPerson,
};
