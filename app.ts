const add = (n1: number, n2: number): number => {
  return n1 + n2;
}

const printResult = (num: number): void => {
  console.log("Result: " + num);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(3, 5));

printResult(add(5, 12));