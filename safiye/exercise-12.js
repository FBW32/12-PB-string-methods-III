//1
let string1 = "Hello World";
let convertedString = string1.toUpperCase();
console.log(convertedString);

//2
let string2 = "Hello Earthling";
let convertedString2 = string2.toLowerCase();
console.log(convertedString2);

//3
let fruit = "Apple";
let firstLetter = fruit.substr(0, 1); //A
let changedWithFirstLetterFruit = firstLetter + fruit + firstLetter;
console.log(changedWithFirstLetterFruit);

//4
let last3Letters = fruit.substr(-3); //ple
let changedWith3Letters = last3Letters + fruit + last3Letters;
console.log(changedWith3Letters);

//5

//let fruit = "Apple";
//let firstLetter = fruit.substr(0, 1);//A
let lastLetter = fruit.slice(-1); //e
//concat.
let changedFruit = lastLetter + fruit.slice(1, -1) + firstLetter; //eppl
console.log(changedFruit);

//6
let stringInLowerCase = "the quick brown fox";
let getFirstLetter = stringInLowerCase.substr(0, 1);
let capitalizedfirstLetter = getFirstLetter.toUpperCase();
let capitalizedString = stringInLowerCase.replace(
  getFirstLetter,
  capitalizedfirstLetter
);
console.log(capitalizedString);
