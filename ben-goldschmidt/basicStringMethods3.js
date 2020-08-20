// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let newVar1 = "Hello World";
let newVarUpp1 = newVar1.toUpperCase();
console.log(newVarUpp1);
// HELLO WORLD


//2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let newVar2 = "Hallo Earthling";
let newVarLow1 = newVar2.toLowerCase();
console.log(newVarLow1);
// hallo earthling


// 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.

let givenString1 = "!Regina George!";
let firstChar1 = givenString1.slice(0, 1);
console.log(firstChar1);
// !

let newString1 = (firstChar1 + givenString1 + firstChar1);
console.log(newString1);
// !!Regina George!!



// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.

let givenString2 = "That's so fetch!";
let indexOfLast3Chars = givenString2.indexOf("ch!");
console.log(indexOfLast3Chars);
// 13

let last3Chars = givenString2.substr(13, 3);
console.log(last3Chars);
// ch!

let newString2 = (last3Chars + givenString2 + last3Chars);
console.log(newString2);
// ch!That's so fetch!ch!


// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.

let givenString3 = "Mean Girls";
// let firstChar2 = givenString3.slice(0, 1);
// console.log(firstChar2);
// // M

let newString3 = givenString3.replace("s", "M").replace("M", "s");
console.log(newString3);
// sean GirlM


// 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let newVar3 = "the quick brown fox";
let newVar3UppFirstLetter = newVar3.replace("t", "T");
console.log(newVar3UppFirstLetter);
// The quick brown fox