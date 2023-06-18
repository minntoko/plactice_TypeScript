class Departmet {
  // private id: string;
  // name: string;
  private employees: string[] = [];

  constructor(private id:string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Departmet) {
    console.log(`Department (${this.id}): ${this.name}`);
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

const accounting = new Departmet("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna"; // これを許可したくない
accounting.name = "NEW NAME";

accounting.describe();
accounting.printEmployeeInformaiton();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();