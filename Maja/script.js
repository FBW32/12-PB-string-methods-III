/* 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console. */

let txt = "Hello World";
let upperCaseTxt = txt.toUpperCase();
console.log(upperCaseTxt);

/* 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. */
let txt2 = "Hello Earthling";
let lowercasetxt2 = txt2.toLowerCase();
console.log(lowercasetxt2);

/* 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB. */
let fruit = "Bananas";
let Bfruit = fruit.charAt(0);
console.log(Bfruit);
let BfruitB = `${Bfruit}${fruit}${Bfruit}`;
console.log(BfruitB); // BBananasB

/* Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
 */
let txt3 = "Scritch";
let SubstrTxt3 = txt3.substr(0, 3);
console.log(SubstrTxt3);
let txt4 = `${SubstrTxt3}${txt3}${SubstrTxt3}`;
console.log(txt4); // ScrScritchScr

/* Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB. */

let txt5 = "BoogieWoogie";
let firstChar = txt5.charAt(0);
console.log(firstChar);
let lastChar = txt5.charAt(11);
console.log(lastChar);
let txt6 = `${lastChar}${txt5}${firstChar}`;
console.log(txt6);

/* Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that  string. Print the result to the console.
 */
let fox = "the quick brown fox";
console.log(fox);
let Fox = fox.charAt(0).toUpperCase() + fox.slice(1);
console.log(Fox);
