// const person: {
//   name: string;
//   age: number;
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple型
// } = {
//   name: "yota",
//   age: 31,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = "AUTHOR"
}

const person = {
  name: "yota",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

// person.role.push("admin"); //pushは許可されてしまう
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザー");
  console.log(Role.ADMIN);
}