"use strict";
class Departmet {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformaiton() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Departmet("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.name = "NEW NAME";
accounting.describe();
accounting.printEmployeeInformaiton();
