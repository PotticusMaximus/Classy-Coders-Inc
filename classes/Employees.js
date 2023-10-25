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
    this.target = 0;
    this.performance = 0;
    Employees.#allEmployees.push(this);
  }
  getSalary() {
    return this.#salary;
  }
  setTarget(num) {
    this.target = num;
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
  setPerformance(num) {
    this.performance += num;
  }
  setPerformanceAvg() {
    if (isNaN((this.performance / this.target) * 100)) {
      throw new Error("Please enter numerical value between 1-100");
    } else {
      this.#performanceAvg = (this.performance / this.target) * 100;
      console.log(`${this.#performanceAvg} %`);
    }
  }
  employeeReview() {
    if (this.#performanceAvg > 100) {
      console.log(
        `${this.name} is performing highly, bonus and promotion recommended`
      );
    } else if (this.#performanceAvg >= 90) {
      console.log(`${this.name} is performing well, bonus share recommended`);
    } else if (this.#performanceAvg >= 80) {
      console.log(
        `${this.name} is performing average, additional training recommended`
      );
    } else if (this.#performanceAvg >= 60) {
      console.log(`${this.name} is performing poorly, intervention required`);
    } else if (this.#performanceAvg < 60) {
      console.log(
        `${this.name} is performing very poorly, seek HR advice and support for them`
      );
    }
  }
}

module.exports = {
  Employees,
};
