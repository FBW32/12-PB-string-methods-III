// 12-PB-string-methods-III
// Programming Basics: string methods

/* 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console. */
let myString = "Hello World";
let convertedString = myString.toUpperCase();
console.log(convertedString); // HELLO WORLD

/* 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. */
let myString1 = "Hello Earthling";
let convertedString1 = myString1.toLowerCase();
console.log(convertedString1); // hello earthling

/* 3. .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB. */
let myString3 = "Bananas";
let getFirstChar = myString3.charAt(0);
console.log(getFirstChar); // B
let result = myString3.slice(0); 
console.log(result); // Bananas
let result1 = `${getFirstChar}` + `${result}` + `${getFirstChar}`;
console.log(result1); // BBananasB

/* 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch. */
let givenString = "Scritch";
let char = givenString.substr(4, 6);
console.log(char); // tch
let string = givenString.slice(0);
console.log(string); // Scritch
let newString = `${char}` + `${string}` + `${char}`;
console.log(newString); // tchScritchtch

/* 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB. */
let givenString1 = "BoogieWoogie";
let char1 = givenString1.charAt(11);
console.log(char1); // e
let char2 = givenString1.charAt(0);
console.log(char2); // B
let string1 = givenString1.slice(1, 11);
console.log(string1); // oogieWoogi
let newString1 = `${char1}` + `${string1}` + `${char2}`;
console.log(newString1); // eoogieWoogiB

/* 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console. */
let value = "the quick brown fox";
let assign = value.charAt(0).toUpperCase() + value.slice(1);
console.log(assign); // The quick brown fox
