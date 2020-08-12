// first question:
let txt = "Hello World";
let convertedTxt = txt.toUpperCase();

console.log(convertedTxt);

// second question:
let txt2 = "Hello Earthling";
let convertedTxt2 = txt2.toLowerCase();
console.log(convertedTxt2);

// third question:
let txt3 = "Bananas";
let strBegin = txt3.charAt(0);
let newTxt3 = strBegin + txt3 + strBegin;

console.log(newTxt3);

// fourth question:
let txt4 = "visualStudio"
let txt4Sliced = txt4.slice(txt4.length -3);
let newTxt4 = txt4Sliced+txt4+txt4Sliced;

console.log(newTxt4);

// fifth question:
let txt5 = "visualStudio";
let firstLetter = txt5.charAt(0);
let lastLetter = txt5.charAt(txt5.length -1);
let newTxt5 = txt5.replace((lastLetter), (firstLetter));

console.log(newTxt5.replace(firstLetter, lastLetter));

// sixth question:
let txt6 = "the quick brown fox";
let newTxt6 = txt6.charAt(0).toUpperCase()+txt6.slice(1);

console.log(newTxt6);