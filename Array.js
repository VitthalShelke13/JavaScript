Array
// let arr = [2, 3, 4];
// console.log(arr);
//also array can be assign like this

// let arr1 = new array(5);
// console.log(arr1);
// arr.push(10); // push add elemnet at the last of original array
// console.log(arr);
// arr.pop(); //pop can remove last element of the array
// console.log(arr);
// // let removed = arr.pop(3); //it can give the which last elemnet we removed
// console.log(removed);
// let result = arr.push();// it can give the lenght of an array
// console.log(result);

// let arr1 = [11, 12, 13, 14, 5];
// console.log(arr1);
// arr1.shift(); //it can be remove first element of the array
// console.log(arr1);
// arr1.unshift(1); //it can be add the elemnet at start
// console.log(arr1);

// //delete method
// let arr2 = [11, 22, 12, 13, 55];
// delete arr2[1]; //this can delete elemnt at index 1 but this is not recomanded way
// console.log(arr2);// because value removed as stored in array as emapty

//SLICING
// let arr3 = [13, 11, 14, -1, -3, 15, 16, 17]; //slicing can print arry elemnt which can be remove
// // arr3.slice(1, 3);
// // console.log(arr3);
// //but
// let slicedarr3 = arr3.slice(2, 5);

// console.log(arr3);
// console.log(slicedarr3);

// splicing
// let arr4 = [5, 6, 7, 8, 9, -1, -2, 10, 11]
// console.log(arr4); //slicing can print arry elemnt which can be avaloible after removing it can cahages original array
// arr4.splice(2, 4)
// console.log(arr4);


// //Mapping
// //mapping is a method which is take a function and excutes that function for each eleemnt of the array .also return the new array
let array5 = [2, 3, 5, 6, 8];
console.log(array5);
let newarray = array5.map(function(anything) {
    return anything * 5;

})
console.log(newarray);