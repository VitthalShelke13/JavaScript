//  var has a functional scope werehas let and const has a block scope
// function myfunction() {
//     var b = 10

//     { //block

//         const z = 30
//         let p = 10
//         var x = 20
//         console.log(z)
//         console.log(p)
//         console.log(x)
//     }

//     console.log(x)
//     console.log(z)
//     console.log(p)
// }
// myfunction()

// function myfunction() {
//     {
//         let x = 11
//         var y = 1
//         x = 10;
//         // const z = 5;
//         console.log(x)
//         y = 6
//         x = 12;
//         const z = 30;
//         console.log(x)

// hoisting
console.log(a)
var a = 10;
console.log(a)
let b;
console.log(b)
b = 20;
console.log(b)
tenmultiplier(5)

function tenmultiplier(number) {
    console.log(number * 5)
}
var twentymultiplier = function(number) {
    console.log(number * 20)
}