"use strict";
class Departmet {
    constructor(n) {
        this.name = n;
    }
    describe() {
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
