let quality1 = {
    name: 'adrees',
    role: 'instructor'
}

let quality2 = {
    city: 'delhi',
    who: 'teacher'
}
let qc3 = {...quality1, ...quality2 };
console.log(qc3);
// function constructor

function person(name, adress, age) {
    this.name = name;
    this.adress = adress;
    this.age = age;
    this.printage = function() {
        console.log('your age is' + age)
    }
}


 let vitthal = new person('vitthal', 'buldana', 25)
console.log(vitthal);
vitthal.printage();
/*
//Value and Reffrence Tpye
let a = 10;
// console.log(a === b);
b = 20;
console.log(a === b);
let c = a;
console.log(c);
console.log(a);
a = 100;
console.log(a);
console.log(c);

// reference types
// objects , arrays and functions

let arr1 = { a: 1 }
let arr2 = { a: 1 }
let arr3 = arr1;
console.log(arr1);
console.log(arr3);
console.log(arr1 === arr2);
console.log(arr1 === arr3);
arr1 = { a: 1 }
console.log(arr1);
console.log(arr1 === arr3);
console.log(arr3);
//in refference type memory reffeence is assign to array thats why arr1=== arr2 output is false reffece is unic 
//but we can reffrecne trancer to another arr like arr1=arr2

let arr5 = [1, 2, 3, 4];
let arr6 = arr5
console.log(arr6 === arr5);
console.log(arr6);
// arr5 = [1, 2, 3, 4]
console.log(arr6 === arr5);
arr5.push(100);
console.log(arr5);
console.log(arr6);
console.log(arr6 === arr5);