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
    for (let i = 0; i < clients.length; i++) {
      if (clients[i] == client) {
        result = clients[i];
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
