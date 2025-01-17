//Warmup-1 -- front3

// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc

// const string = (str) => {
//     let result = '';
//     for (let i = 0; i < 3; i++) {
//         result += str.slice(0, 3);
//     }
//     return result;
// }
// console.log(string("Hello"));

// ---------------------------------------------------------------------------------------------

//Warmup-1 -- mixStart

// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false

// const string = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         return str.includes('ix') ? true : false;
//     }
// }
// console.log(string("mix"));

// ---------------------------------------------------------------------------------------------
//Warmup-1 -- monkeyTrouble

// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

// const string = (str1, str2) => {
//     return str1 === str2 ? true : false;
// }
// console.log(string(false,false));

// ---------------------------------------------------------------------------------------------

// Warmup-1 -- sumDouble

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

// const sumDouble = (a, b) => {
//     return a === b ? (a + b) * 2 : a + b;
// }
// console.log(sumDouble(2,2));

// --------------------------------------------------------------------------------------------

//Warmup-1 -- diff21

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

// function diff21(n) {
//     return 21 - n % 21
// }
//
// console.log(diff21(10))

// --------------------------------------------------------------------------------------------

// backAround('cat') → tcatt
// backAround('Hello') → oHelloo
// backAround('a') → aaa

// function backAround(str){
//     return str[str.length-1]+str+str[str.length-1]
// }
//
// console.log(backAround('a'))