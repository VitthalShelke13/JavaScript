// console.log('start');
// var a = 10;

// function test() {
//     alert('hello')
//     console.log(a)
    
// }

//console.log(a);
var b = 11;

function Outer(outerfunction) {
    let c = 10;
    let d = 20;
    var f = 12;
    console.log(c + d);
    outerfunction()
}

Outer(printname);


function printname() {
    console.log('vitthal 123');
}
// let g = 11;
//  console.log(g);
// g = 13;
// console.log(g);

// function person(name, yearofbirth) {
//     this.name = name
//     this.yearofbirth = yearofbirth
//     let calculateage = function() {
//         return 2022 - yearofbirth
//     }

//     this.age = calculateage()


// }
// let ram = new person('ram', 1995)
// console.log(ram.yearofbirth)
//     // console.log(ram.calculateage)
// console.log(ram.age)
// console.log(Math.ceil(Math.random(.1) * 1000000))
// let arr4 = [5, 6, 7, 8, 9, -1, -2, 10, 11]
// console.log(arr4); //slicing can print arry elemnt which can be avaloible after removing it can cahages original array
// arr4.splice(2, 4)
// console.log(arr4);
// let date1 = new Date();
// console.log(date1)
// console.log(date1.getDay())
// console.log(date1.getTime())
// console.log(date1.getMonth())
// console.log(date1.getMilliseconds())
// console.log(date1.getMinutes())
// console.log(date1.getHours())
// console.log(date1.setMonth(3))
// let String = "ram is going to school"
// let position = String.search("to")
// console.log(position)
//