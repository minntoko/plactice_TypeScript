class Departmet {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Departmet) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    // validation etc
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

// accounting.employees[2] = "Anna"; // これを許可したくない
accounting.name = "NEW NAME";

accounting.describe();
accounting.printEmployeeInformaiton();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();