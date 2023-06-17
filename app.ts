// const person: {
//   name: string;
//   age: number;
// }
const person = {
  name: "yota",
  age: 31,
  hobbies: ["Sports", "Cooking"]
};

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}