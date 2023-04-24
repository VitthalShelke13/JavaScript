function int() {
    var name = 'vitthal'

    function displayname() {
        console.log(name)
    }
    displayname()
}
int()

//2
function calculator() {
    var a = 10;

    function multiplier() {
        console.log(a)
    }

    function addition() {
        console.log(a)
    }

    addition()
    multiplier(5 * a)

}
calculator();

//3
// function multiplier() {
//     var b = 20;

//     function printA() {
//         console.log(b);
//     }
//     return printA
// }
// var result = multiplier()
// result()