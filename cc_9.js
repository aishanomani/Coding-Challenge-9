// Task 1: Creating an Employee Class
console.log("********** Created Employee Class **********");
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output
console.log(emp1.calculateAnnualSalary()); // Expected output

// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
console.log("********** Created Manager Class with Inheritance **********");
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.10;
    }
}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output
console.log(mgr1.calculateBonus()); // Expected output

// Task 3: Creating a Company Class
console.log("********** Created Company Class **********");
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees(); // Expected output

// Task 4: Implementing a Payroll System
console.log("********** Implemented Payroll System **********");
Company.prototype.calculateTotalPayroll = function() {
    let totalPayroll = 0;
    this.employees.forEach(employee => {
      if (employee instanceof Manager) {
        totalPayroll += employee.calculateAnnualSalary() + employee.calculateBonus();
      } else {
        totalPayroll += employee.calculateAnnualSalary();
      }
    });
    return totalPayroll;
  };
  console.log(company.calculateTotalPayroll());

  