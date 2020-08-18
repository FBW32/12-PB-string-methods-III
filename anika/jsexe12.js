//******************Exercise 12*****************

// # 12-PB-string-methods-III

// # Programming Basics: string methods

// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let varQ1 = "Hello World";
let varQ1Upper = varQ1.toUpperCase();
console.log(varQ1Upper); // HELLO WORLD

// 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let varQ2 = "Hello Earthling";
let varQ2Lower = varQ2.toLowerCase();
console.log(varQ2Lower); // hello earthling

// 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.

let varQ3 = varQ2.replace("H", "HH").replace("g", "gH");
console.log(varQ3); // HHello EarthlingH

// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.

let varQ4 = "What became of the likely lads?";
let varQ4Libertines = varQ4.replace("W", "ds?W").replace("lads?", "lads?ds?");
console.log(varQ4Libertines); // ds?What became of the likely lads?ds?

// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.

let varQ5 = "Tell the king";
let varQ5Changed = varQ5.replace("Tell the king", "gell the kinT");
console.log(varQ5Changed); // gell the kinT

// 6. Declare a variable and assign the value "the quick brown fox"
// (all in lower case).
// Capitalize the first letter of that string. Print the result to the console.

let varQ6 = "the quick brown fox";
let varQ6Upper = varQ6[0].toUpperCase() + "he quick brown fox";
console.log(varQ6Upper); // The quick brown fox
