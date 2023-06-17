// const person: {
//   name: string;
//   age: number;
// }
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple型
} = {
  name: "yota",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

// person.role.push("admin"); //pushは許可されてしまう
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}