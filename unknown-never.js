"use strict";
let userInput;
let anyInput;
let userName;
userInput = "Max";
anyInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
}
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
    // while (true) {}
};
const result = generateError("エラーが発生しました", 500);
console.log(result); // undefinedすら表示されない なぜならスクリプトが上で停止するから
