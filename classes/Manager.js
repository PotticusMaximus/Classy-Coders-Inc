const { Employees } = require("./Employees");

class Manager extends Employees {
  #employeesManaged;
  constructor(name, position, salary, department, employeesManaged) {
    //
    super(name, position, salary);
    this.#employeesManaged = [];
    this.department = department;
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
  getDepartment() {
    return this.department;
  }
  setDepartment(department) {
    this.department = department;
  }
}

module.exports = {
  Manager,
};
