console.log(a)
var a = 10;

let x;
console.log(x)
    //hoisting work diffrently for var let and const

// functional hoisting
// function we can create anywhere and call it even before decleration

// tenmultiplier(10)

// function tenmultiplier(number) {
//     console.log(number * 10)
// }
// tenmultiplier(5);
console.log(twentymultiplier)
    //  twentymultiplier(20)
var twentymultiplier = function(number) {
    console.log(number * 10)
}
twentymultiplier(10)

var firtname = 'vitthal'
var lastname = 'shelke'
var printfullname = function() {
    console.log(firtname, lastname);
}
printfullname();