"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log("Result: " + num);
};
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, (addResult) => {
    console.log(addResult);
});
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(3, 5));
printResult(add(5, 12));
