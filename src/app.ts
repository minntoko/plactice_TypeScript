class Departmet {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Departmet) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Departmet("Accounting");
accounting.describe();

const accountingCopy = {
  name: "DUMMY",
  describe: accounting.describe
};

accountingCopy.describe();