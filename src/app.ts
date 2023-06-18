class Departmet {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Departmet("Accounting");

console.log(accounting);
