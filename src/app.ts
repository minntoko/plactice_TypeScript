// const names: Array<string> = [];
// names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(" ");
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDiscribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません。";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です。";
  }
  return [element, descriptionText];
}

console.log(countAndDiscribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

extractAndConvert({name: "Max"}, "name");