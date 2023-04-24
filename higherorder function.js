//higher order function are function where we can pass function as a arguments.or
// we can return function from function

// function outer(outerfunction) {
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
//     outerfunction()
// }

// function smaller() {
//     console.log('i am a smaller function')
// }
// outer(smaller)

// //2
// function printdetail() {
//     console.log('vitthal');
//     console.log('buldana');
//     return 10
//         // console.log('Engineer');
// }
// // printdetail()
// var output = printdetail()
// console.log(output)


function printdetail1() {
    console.log('ram')
    return function() {
        console.log('shyam')
    }
}
printdetail1()