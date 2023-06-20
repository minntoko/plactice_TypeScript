var userInput;
var anyInput;
var userName;
userInput = "Max";
anyInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
};
var result = generateError("エラーが発生しました", 500);
console.log(result); // undefinedすら表示されない なぜならスクリプトが上で停止するから
