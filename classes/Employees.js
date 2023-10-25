class Employees {
  #salary;
  #isHired;
  constructor(name, position, salary) {
    this.name = name;
    this.#salary = salary;
    this.position = position;
    this.#isHired = true;
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
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
}

module.exports = {
  Employees,
};
