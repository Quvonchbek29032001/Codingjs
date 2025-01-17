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
//     return n === 21 ? 0 : n > 21 ? n % 21 * 2 : 21 - n % 21;
// }
//
// console.log(diff21(10))
// console.log(diff21(30))
// console.log(diff21(0))

// not success

// --------------------------------------------------------------------------------------------

// backAround('cat') → tcatt
// backAround('Hello') → oHelloo
// backAround('a') → aaa

// function backAround(str){
//     return str[str.length-1]+str+str[str.length-1]
// }
//
// console.log(backAround('a'))

// --------------------------------------------------------------------------------------------

// Warmup-1 -- or35

// or35(3) → true
// or35(10) → true
// or35(8) → false

// function or35(n) {
//     return n % 3 === 0 || n % 5 === 0 ? true : false;
// }
//
// console.log(or35(8));

// --------------------------------------------------------------------------------------------

//Warmup-1 -- intMax

// intMax(1, 2, 3) → 3
// intMax(1, 3, 2) → 3
// intMax(3, 2, 1) → 3

// function intMax(a, b, c) {
//     return a > b && a > c ? a : b > c ? b : c
// }
//
// console.log(intMax(3, 2, 1));

// --------------------------------------------------------------------------------------------

// Warmup-1 -- front22
//
// front22('kitten') → kikittenki
// front22('Ha') → HaHaHa
// front22('abc') → ababcab

// function front22(str){
//     return str.substring(0,2)+str+str.substring(0,2);
// }
//
// console.log(front22('123'));

// --------------------------------------------------------------------------------------------

// Warmup-1 -- close10

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

// function close10(a, b) {
//     return Math.abs(a - 10) === Math.abs(b - 10) ? 0 : Math.abs(a - 10) < Math.abs(b - 10) ? a : b
// }
//
// console.log(close10(13, 7))

// --------------------------------------------------------------------------------------------

// Warmup-1 -- parrotTrouble

// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false

// function parrotTrouble(talking, hour) {
//     return (hour < 7 || hour > 20) && talking ? true : false;
// }
//
// console.log(parrotTrouble(true, 6))

// --------------------------------------------------------------------------------------------

// Warmup-1 -- startHi

// startHi('hi there') → true
// startHi('hi') → true
// startHi('hello hi') → false

// function startHi(str) {
//     return str.substring(0, 2) === 'hi' ? true : false;
// }
//
// console.log(startHi('hi'))

// --------------------------------------------------------------------------------------------

// Warmup-1 -- in3050

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

function in3050(a, b) {
    return a >= 30 && a <= 40 && b >= 30 && b <= 40 ? true : a >= 40 && a <= 50 && b >= 40 && b <= 50 ? true : false;
}

console.log(in3050(30, 31));