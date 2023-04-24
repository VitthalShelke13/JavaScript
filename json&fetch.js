//jason stand for javascript object notation .json is lightweight data-interchange  format
// json is use to send data between computer clint and surver
/*
let person1 = {
    name: 'Abhinav',
    age: 30,
    address: {city: 'Delhi', pin: 10010},
    instructor: true,
    classes: ['mon', 'tues', 'fri', 100, true],
    anything: null,
    calculate: {
        test: true,
        value: {
            val: 10
        }
    },
    myfunc: function(){
        console.log('it is function');
    }
}

// json file like
// {
//     "name": "abhinav",
//     "age": 30,
//     "address": "Delhi"
// }
//for converting a JS object into JSON
// console.log(JSON.stringify(person1));
let jsonConverted = JSON.stringify(person1)
console.log(jsonConverted);

// to convert JSON into a JS object we use
let parsedObj = JSON.parse(jsonConverted)
console.log(parsedObj);



// json Supported types
// string
// objects
// arrays
// boolean
// numbers
// null

// not supported
//function
//unndefined
*/


//@@FETCH API@@

//fetch api provides a javascript interface for accesing and manipulating part of the protocall such as request an respose
// Asyncronous code
// runs after the main thread / Global context /  is executed

// browser's fetch api
// fetch APIs
// fetch is a promise


// steps to call and get data from an api
// 1. make a cal to fetch and pas the api url
// 2. fetch returns a promise so we can .then and recieve response object
// 3. properties like status, url, headers, ok are avialble,
// 4. call .json() on the response object
// 5. .json() methods again returns a promise
// 6. use .then() method and get access to the data

/*
fetch('https://jsonplaceholder.typicode.com/posts')// if url goes wrong it gives empty object also status change 
.then((res)=>{
    console.log(res); //respose object
    return res.json(); //return promise
})
.then((data)=>{
    console.log(data)
//     for(let i=0;i<data.length;i++){// it is use to access specific data
//         console.log(data[i].name)
//     }
})
.catch((error)=>{
    console.log(error)
})


//  console.log(fetch('https://jsonplaceholder.typicode.com/posts'));//it gives proise pending fist step

*/
 // methods in API
// 1. "GET" ---> getting the data
// 2. "POST" ---> sending the data
// 3. "PUT" ----> update the dat
// 4. "DELETE" ---> delete the data


const data2 = {
    name:"vitthal@123.com",
    password: "password",
}

fetch('https://jsonplaceholder.typicode.com/posts', {
   method: "POST",
   body: JSON.stringify(data2),
   headers: {
    'Content-Type':'application/json' // case sensitive 
   }
})
.then((res) => {
   
    return res.json()
})
.then((data) => {
    console.log(data);
})

/*
const data1 = {
    username: "abhinav@gmail.com",
    password: "password",
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(data1),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data);
})


*/
 

// sample data on making call to fb login
// user = {
//     friendList: ['abhibav', 'sonu'],
//     userdetials: {
//         fullanme: 'abhinav kumar',
//         email: 'abhinav@gmail.com',
//         mobileNo: '6666666',
//         profilePic: 'htttps://imagfe.jpg'
//     },
//     message: {
//         abhinav: '',
//         sonu: '',
//         mahesh: ''
//     }
// }

// facebook api  --->
// will take the data
// search this username
// 1. found --> user is valid ---> match the password --->
// 2. not found --> user in invalid
//  ----> user not valid please try again