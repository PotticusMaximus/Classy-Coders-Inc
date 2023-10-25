class Employees {
  #salary;
  #isHired;
  static #allEmployees = [];
  constructor(name, position, salary) {
    this.name = name;
    this.#salary = salary;
    this.position = position;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }
  getSalary() {
    return this.#salary;
  }
  static getEmployees() {
    return Employees.#allEmployees;
  }
  static getTotalPayroll() {
    let count = 0;
    for (let i = 0; i < Employees.#allEmployees.length; i++) {
      count += Employees.#allEmployees[i].#salary;
    }
    return count;
  }
  setSalary(amount) {
    if (amount < 0) {
      throw new Error("Salary cannot be negative");
    } else {
      this.#salary = amount;
    }
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command !== "hire" && command !== "fire") {
      throw new Error("Command must be either hire or fire");
    } else if (command == "hire") {
      this.#isHired = true;
    } else if (command == "fire") {
      this.#isHired = false;
    }
  }
  promote(position, salary) {
    this.position = position;
    this.#salary = salary;
  }
}

module.exports = {
  Employees,
};
