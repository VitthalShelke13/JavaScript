  let array5 = []
console.log(array5)
array5.push()
console.log(Array.prototype)
Array.prototype.mypush = "vitthal is my name"
console.log(array5.mypush)
    // Array.prototype.length = 'vitthal id';
    // console.log(array5.length)

function person(name, role) {
    this.name = name;
    this.role = role;
    this.printdetail = function() {
        console.log('details are ' + this.name + ' ' + this.role)
    }

    this.calculateSalary = function() {
        if (role === 'admin') {
            return 5000
        }
        if (role === 'user') {
            return 2000
        }
    }
}


// person.prototype.calculateSalary = function() {
//     if (role === 'admin') {
//         return 500
//     }
//     if (role === 'user') {
//         return 200
//     }
// }


//     Object.prototype.calculateSalary = function() {
//         if (role === 'admin') {
//             return 50
//         }
//         if (role === 'user') {
//             return 20
//         }
//     }
// }

let ram = new person('ram', 'admin')
console.log(ram)
ram.printdetail();
console.log(ram.calculateSalary())


let shyam = new person('Shyam', 'user')
console.log(shyam)
shyam.printdetail();
console.log(shyam.calculateSalary())


// 
// person.prototype.SomeProperty = 'Somthing'
Employee.prototype.SomeProperty = 'Somthing'

function Employee(role) {
    this.role = role;

}
// Employee.prototype = Object.create(person.prototype)
console.log(ram.SomeProperty)
let vitthal = new Employee('trainer')
console.log(vitthal.role)
console.log(vitthal.SomeProperty)