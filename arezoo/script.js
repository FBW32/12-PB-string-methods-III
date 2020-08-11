//1

let myFirstStr = "Hello Word";
let result1 = myFirstStr.toUpperCase();
console.log(result1);

//2
let mySecondStr = "Hello Earthling";
let result2 = mySecondStr.toLowerCase();
console.log(result2);

//3
let fruit = "Bananas";
let firstChar = fruit.charAt(0);
let result3 = firstChar + fruit + firstChar;
console.log(result3); //BBananasB

//4
let funTime = "swimming";
let lastChar = funTime.substr(-3);
console.log(lastChar);
let result4 = lastChar + funTime + lastChar;
console.log(result4); //ingswimminging

//5
let changingPosition = "LovableBerlin";
let getFirstChar = changingPosition.charAt(0);
console.log(getFirstChar); //L
let getLastChar = changingPosition.charAt(changingPosition.length - 1);
console.log(getLastChar); //n
let result5 = changingPosition.replace(getFirstChar, getLastChar);
console.log(result5); //novableBerlin
let result51 = result5.slice(0, changingPosition.length - 1);
console.log(result51 + getFirstChar); //novableBerliL

//6
let lowerCaseSentence = "the quick brown fox";
let result6 = lowerCaseSentence.charAt(0);
console.log(result6); //t
let resultUppeerCase = result6.toUpperCase();
console.log(resultUppeerCase); //T
let finalResult6 = resultUppeerCase + lowerCaseSentence.slice(1);
console.log(finalResult6); //The quick brown fox
