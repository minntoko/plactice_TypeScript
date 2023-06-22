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

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string }, { age: number }>(
  { name: "Max" }, { age: 30 }
  );
mergedObj.age;