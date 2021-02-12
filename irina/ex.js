// 12-PB-string-methods-III

// 1-Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console. 
let ex1 = "Hello World";
console.log(ex1.toUpperCase());// HELLO WORLD

//2-Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
let ex2 = "Hello Earthling";
console.log(ex2.toLowerCase()); //hello earthling

//3-Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas ==> BBananasB
let ex3 = "Bananas";
let ex4 = ex3.slice(0, 1);
console.log(ex4);
//OR
let ex5 = ex3.charAt(0);
console.log(ex5);

let ex6 = `${ex4}${ex3}${ex4}`;
console.log(ex6); //BBananasB
//OR
let ex7 = `${ex5}${ex3}${ex5}`;
console.log(ex7); //BBananasB

// 4-Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch 
let ex8 = "student";
let ex9 = ex8.substring (0, 3);
console.log(ex9); // stu
//OR
let ex10 = ex8.substr(0, 3);
console.log(ex10); //stu

let ex11 = ex9 + ex8 + ex10 + ex10;
console.log(ex11); // stustudentstustu

//5-Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
let ex12 = "WebDeveloper"
let ex13 = ex12.split("W");
console.log(ex13);
let ex14 = ex13  + ex12.slice(0,1);
console.log(ex14);
let ex15 = ex14.split("r");
console.log(ex15);// [ ',ebDevelope', 'W' ]

//6-Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let ex16 = "the quick brown fox";
let ex17 = ex16.slice(0, 1);
let ex18 = ex17.toUpperCase();
let ex19 = ex16.split("t");
let ex20 = ex18 + ex19;
console.log(ex20); // T,he quick brown fox


