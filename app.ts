let userInput: unknown;
let anyInput: any;
let userName: string;

userInput = 5;
userInput = "Max";

if( typeof userInput === "string" ) {
  userName = userInput;
}

const  generateError = (message: string, code: number): never => {
  throw {message: message, errorCode: code};
  // while (true) {}
}

const result = generateError("エラーが発生しました", 500);
console.log(result); // undefinedすら表示されない なぜならスクリプトが上で停止するから
