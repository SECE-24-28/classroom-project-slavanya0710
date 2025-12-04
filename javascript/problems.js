//1. check grade
 let grade = "B";
switch (grade) {
  case "A": console.log("Excellent"); break;
  case "B": console.log("Good"); break;
  case "C": console.log("Average"); break;
  default: console.log("Try again");
}
//2.convert uppercase
 let name = "hello";
console.log(name.toUpperCase());

// 3.split strin to array 
let sentence = "I love JS";
let words = sentence.split(" ");
console.log(words);
// 4.lowercase
let text = "WORLD";
console.log(text.toLowerCase());
// 5.join array to string 
let arr = ["Welcome", "Home"];
console.log(arr.join(" "));
//6.replace all char
let str = "abc abc";
console.log(str.replaceAll("abc", "123"));
// 7.split a string 
let fruit = "apple,banana,mango";
console.log(fruit.split(","));

// 8.reverse a string 
let s = "hello";
let r = s.split("").reverse().join("");
console.log(r);

// count char in string 
let a = "javascript";
console.log(a.length);

// 10.check vowel or not 
let t = "apple";
let f = t[0].toLowerCase();
if ("aeiou".includes(f)) {
  console.log("Starts with vowel");
} else {
  console.log("Not starts with vowel");
}

//11. reverse a words
let w = "I love JS";
let o = w.split(" ").reverse().join(" ");
console.log(o);