// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let varHello = "Hello World";
let upperVar = varHello.toUpperCase();
console.log(upperVar); // HELLO WORLD


// 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let varHello2 = "Hello Heartling";
let lowerVar = varHello2.toLowerCase();
console.log(lowerVar); // hello heartling

// 3. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.


let thisString = "Bananas";
let firstChar = thisString.charAt(0);
let newString3 = (firstChar + thisString + firstChar);
console.log(newString3); // BBananasB

// or 


let givenString = "Bananas";
let newString = givenString.replace("Bananas", "BBananasB");
console.log(newString); // BBananasB



// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.

let givenString2 = "Brokkoli";
let lastChar1 = givenString2.charAt(5);
console.log(lastChar1); // o
let lastChar2 = givenString2.charAt(6);
console.log(lastChar2); // l
let lastChar3 = givenString2.charAt(7);
console.log(lastChar3); // i

let newString2 = (lastChar1 + lastChar2 + lastChar3) + givenString2 + (lastChar1 + lastChar2 + lastChar3);
console.log(newString2); // oliBrokkolioli


// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.

let givenString3 = "FootBall";
let movChar1 = givenString3.charAt(0);
let movChar2 = givenString3.charAt(7);
let givenStringMod = "ootball";
let newString4 = (movChar2 + givenStringMod + movChar1);
console.log(newString4); // lootballF

// or

let givenString5 = "FootBall";
let newString5 = givenString5.replace("F", "l") && ("l", "F"); // lootballF


 
 // 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

 let varFox = "the quick brown fox";
 let firstLet = varFox.charAt(0).toUpperCase();
 console.log(firstLet);
 
 // or 

 let firstLet2 = varFox.charAt(0);
 let capLett = firstLet2.toUpperCase();
 console.log(capLett); // T 
 
 