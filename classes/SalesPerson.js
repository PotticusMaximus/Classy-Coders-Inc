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
  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
  SalesPerson,
};
