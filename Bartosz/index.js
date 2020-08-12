// 12-PB-string-methods-III
// Programming Basics: string methods 

// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let var1 = "Hello World";
let upper = var1.toLocaleUpperCase();
console.log(upper); // HELLO WORLD

// 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let var2 = "Hello Earthling";
let lower = var2.toLowerCase();
console.log(lower); // hello earthling

// 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.
let substrString = "Bananas";
let getSubstr = substrString.substr();
let text = substrString.slice(0, 1) + getSubstr.slice() + substrString.slice(0, 1);
console.log(text); // BBananasB

// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
let substrString2 = "Berlin";
let getSubstr2 = substrString2.substr();
let text2 = substrString2.slice(3, 6) + getSubstr2.slice() + substrString2.slice(3, 6);
console.log(text2); // linBerlinlin

// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.
let substrString3 = "BoogieWoogie";
let getSubstr3 = substrString3.substr();
let text3 = substrString3.slice(11,12) + getSubstr3.slice(1,11) + substrString3.slice(0,1);
console.log(text3); // eoogieWoogiB

// 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let value = "the quick brown fox";
let text4 = value.substring(0, 1).toUpperCase() + value.substring(1);
console.log(text4); // The quick brown fox