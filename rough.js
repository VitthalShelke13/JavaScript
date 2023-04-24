function person(name, roll) {
    this.name = name;
    this.roll = roll;

    this.printdetail = function() {
        console.log('details are  ' + this.name + ' ' + this.roll)
    }

    // this.calculatesalary = function() {
    //     if (roll = 'teacher') {
    //         return 5000

    //     }
    //     if (roll = 'mentor') {
    //         return 2000
    //     }


    person.prototype.calculatesalary = function() {
        if (roll = 'teacher') {
            return 500

        }
        if (roll = 'mentor') {
            return 200
        }
    }
}

let ram = new person('ram', 'teacher')
console.log(ram)
ram.printdetail()
console.log(ram.calculatesalary())


let shyam = new person('shyam', 'mentor')
console.log(shyam)
shyam.printdetail()