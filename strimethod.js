// 1.)

let myWord = "Hello world";
let myWordUp = myWord.toUpperCase();
console.log(myWordUp);  //HELLO WORLD

//2.)
let myWord2 = "Hello Earthling"
let myWordLw = myWord2.toLowerCase();
console.log(myWordLw);   // hello earthling

//3.)
let bigName = "Frankfurt";
let replacedBigName = bigName.replace("Frankfurt","FFrankfurtF");
console.log(replacedBigName);  // FFrankfurtF

//4.)
let bigName2 = "superman";
let replacedBigName2 = bigName2.replace("superman","mansupermanman");
console.log(replacedBigName2);  // mansupermanman

//5.)
let bigName3 = "LongJohnny";
console.log(bigName3.replace("LongJohnny","yongJohnnL")); //yongJohnnL

//6.)
 let bigName4 = "the quick brown fox";
 let bigName4Up = bigName4.charAt(0).toUpperCase();
 console.log(bigName4Up);   //  T