class Employees {
  #salary;
  #isHired;
  #performanceAvg = 0;
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
  getPerformance() {
    return this.#performanceAvg;
  }
  setPerformance(number) {
    if (isNaN(number)) {
      throw new Error("Please enter numerical value between 1-100");
    } else {
      this.#performanceAvg = number;
    }
  }
}

module.exports = {
  Employees,
};
