"use strict";
const add = (n1, n2, showResult, phrase) => {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('入力値が正しくありません');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
let number1;
number1 = 5;
const number2 = 2.8; // 完璧に型が推論される場合は型を明示する必要はない
const printResult = true;
let resultPhrase = 'Result: ';
// resultPhrase = 0;
const result = add(number1, number2, printResult, resultPhrase);
