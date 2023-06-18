"use strict";
class Departmet {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformaiton() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Departmet("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.name = "NEW NAME";
accounting.describe();
accounting.printEmployeeInformaiton();
