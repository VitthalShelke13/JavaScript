// let string1 = 'vitthal'

// for(let char of string1){

// console.log(char)
// // console.log(char.charAt(string1))
// }


// let string1 = 'vitthal'
// for(let i=0;i<string1.length;i++){
//     console.log(i)
//     let a =string1.charAt(i)
//     console.log(a)
// }

// let name1 = 'game'
// for(let i=0;i<name1.length;i++){
//     console.log(name1.charAt(i))
// }


//  let str = 'name'
//  console.log(typeof(str))
//  let str2 = 100000000000000000000
//  console.log(typeof(str2))
//  let st3 = {name:'vitthal', age:30}
//  console.log(typeof(st3))
//  let a1 = []
//  console.log(typeof(a1))
//  let x = undefined
//  console.log(typeof(x))
//  let t = null
//  console.log(typeof(t))
// // primitive data tyep = string number undifined bigint

// let string = 'vitthal'
// let st = string.slice(0,3)
// console.log(st)


// let arr3 = [13, 11, 14, -1, -3, 15, 16, 17]; //slicing can print arry elemnt which can be remove

// console.log(arr3);
// arr3.slice(1, 3);

// console.log(arr3.slice(1, 3))
// let slicedarr3 = arr3.slice(2, 5);
// console.log(slicedarr3)

// let arr4 = [5, 6, 7, 8, 9, -1, -2, 10, 11]
// console.log(arr4); 
// arr4.splice(2, 4)
// console.log(arr4);
// let arr =[1,2]
// console.log(arr.push(20))
// console.log(arr)
// prototype in javascript 
// Every object in javascript has a builtin property which is called as prototype. and it a predefined method
// oject inhirit properties and method form prototype
//    function user(){
//     this.name = 'vitthal'
//     this.Role = 'student'
//    }
//  user.prototype.age=24
//    let user1 = new user()
//    console.log(user1)
//    //user1.age = 30;
//    console.log(user1.age)

//    let user2= new user()
//    console.log(user2)
//    console.log(user2.age)//undefined

//   var ten= ()=>{
//     console.log(this)
//   }
// console.log(ten())
    
// function th(){
//   console.log(this)
// }
// th()

//  var obj1={
//  b : 50,
// printname:(yearofbirth)=>{
//   console.log(this)
//   var test = ()=>{
// console.log(this)
//   }
//   test()

//   return 2022-yearofbirth
  
// }

// }
// //  obj1.printname()
// console.log(obj1)

// let obj ={
//   a:20,
//   calculateAge: function(Yearofbirth){ //let and const does not attached to window function
//       console.log(this) 
//       var test1(){
//        let x= ()=>{
//           console.log(this)
//         }
//         test1()
//       }
 
//       console.log("somthing")
//       return 2022-Yearofbirth
     
//   } 
  
// }
// obj.calculateAge()

//lexical scoping
//  function test(){
//  var x=20
//   console.log(x)
//  }

// test()
// console.log(x)
// scope block functional scope

// {
//   let ram ='name'
//   var  shyam= 'name2'
// }
// // console.log(ram)
// console.log(shyam)
 

//settimeout argumetnt 3rd
// function hell(username){
//   console.log('username are ' +username)
// }
// setTimeout(hell,2000,'vitthal')
 /*
//calback hell
setTimeout((username, pwd)=>{
  console.log('username ' +username);
  console.log('password ' +pwd);
  //database check
  let userID='123'
  setTimeout((userid)=>{
      console.log('id ' +userid)
      let friendlist =['ram','shyam','lakhan']
      setTimeout((friendlist)=>{
        //database check get massage
          for(let i=0; i<friendlist.length;i++){
              console.log(friendlist[i])
             setTimeout((friendname)=>{
              console.log(friendname+ 'meassage')
             },1000*i,friendlist[i])
             console.log('meassage')
          }
      },2000,friendlist)

  },2000,userID)
},2000,'vitthal','12345')
*/

// let user = (username)=>{
//   return new Promise((resolve, reject)=>{
//     let a=20;
//     let b =20;
//     if(a===b){
//        console.log('a and b are equal')
//      resolve();
//     }else{
//        console.log('a and b not equal')
//       reject('not eq');
//     }
//   })
// }

// user('raju')
// .then((id)=>{
//   console.log('success')

// }).
// catch((e)=>{
//   console.log('reject')
// })
//  console.log(user())


// var promise = new Promise(function(resolve, reject) {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks"
//   if(x === y) {
//     resolve();
//   } else {
//     reject();
//   }
//   });
  
//   promise.
//     then(function () {
//       console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//       console.log('Some error has occurred');
//     });
  
/*
    let fetchUserId= (username)=>{
      return new Promise((resolve, reject)=>{
          if(username==='vitthal'){
              console.log('succesfully fetch')
              resolve('123')
          }else{
              console.log('not fetch')
              reject('user not found')
          }
       })
  }
  
  let getFriendlist = (USERID)=>{
      return new Promise((res,rej)=>{
          if(USERID==='123'){     
  let FRIENDLIST= ['ganesh', 'babu', 'satyam']
  res(FRIENDLIST)
          }else{
              rej('USERID not valid')
          }
      })
  }
  
  let GETMESSAGE =(FRIENDLIST)=>{
      return new Promise((res, rej)=>{
  if(FRIENDLIST){
      let obj={}
      for(let i=0;i<FRIENDLIST.length;i++){
          obj[FRIENDLIST[i]]= 'msg for ' +FRIENDLIST[i]
      }
      res(obj)
  }
  rej('friend not found')
      })
  
  }
  
  
  //handling promises
  //calling of the promises is called as handling of the promises
  
  
  fetchUserId('vitthal')
  .then((id)=>{
      console.log('successfully fithched')
      console.log(id)
  })
  .catch((e)=>{
      console.log('id not match')
      console.log(i)
  })
  */
/*

  let string = 'vitthal'
  // let result = string.split('')
  // console.log(result)
  // let z = result.reverse()
  // console.log(z)
  // let join = z.join('')
  // console.log(join)
  for(let i=string.length-1; i>0;i--){
    //  console.log(string.charAt([i]))
    //  console.log(string.charAt(i))
    // console.log(i)
   let str = string.charAt(i)
   console.log(str)
  }

 function outer(onefunction){
  let a =10
   let b=20
  console.log(a+b)
  // onefunction()
 }
 function smaller(){
  console.log('vitthal my name')
 }
//  outer(smaller())
outer()





function parent(){
  console.log('ram is parent')
  return function(){
    console.log('shaym is child of ram')
  }
}
  function myname(){
    
  }

  let x=1000000000000000  ;
  console.log(typeof(x))
  let y = 'vitthal'
  console.log(typeof(y))
let z =y.charAt(2)
console.log(z)
let arr1=[1,2,3,4,6]
 arr1 =new Array(5)
console.log(arr1)

// closer -function along with its lexical scope form closer
function int(){
  let name='vitthal'
  function closer(){
    console.log(name)
  }
  closer()
}
int()



// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);
//A callback function  is a function that is passed as an argument in another function.
//Which is then called inside the parent function to complete a routine or an action
function addtion(a,b){
  console.log(a+b)}
function result(value1, value2,callback){
callback(value1,value2)
  }

result(5,5,addtion)
let arr3=['a','v',]
arr3.unshift('c')
console.log(arr3)
arr3.shift()
console.log(arr3)
console.log(arr3.shift())
 let map=[1,2,3,4,5,6]
 console.log(map)
 let newmap= map.map(function(any){
  return any*2

 })
 console.log(newmap)


 // spread operator 
 // the javscript spred operator allowas us to copy all the part of an existing array or object 
 // int another array
 
 // traditonal method
 let aray=[1,2,3]
 let aray2=['a','v']
//  for (let i=0;i<aray.length;i++){
//   aray2.push(aray[i])// if we dirctly use push it can store hole array in aray2
//  }
//  console.log(aray2)
//  let aray3=[]
//  aray2.join(aray)
//  console.log(aray2)
//  aray2.concat(aray)
//  console.log(aray2)
 let newaray=[...aray,...aray2]
 console.log(newaray)
let obj={name:'vitthal'}
let listofnumber=[1,2,3]
let new1={...obj,...listofnumber}
console.log(new1)
//
//math operation
// let math=5
// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// console.log(Math.pow(10,3))
// console.log(Math.sqrt(4))
// console.log(Math.round(4.6))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.7))
// console.log(Math.ceil(Math.random()*4))
// console.log(Math.ceil(Math.random() * 1000000))

// //date object
// let time=new Date()
// console.log(time)
// console.log(time.getDate())
// console.log(time.getTime())
// console.log(time.getHours())
// console.log(time.getMinutes())
// let time1=new Date(2021,11,31,8)
// console.log(time1)

function userDetail(name,city){
  this.name=name
  this.city=city
  console.log(`user have name ${this.name} having city ${this.city} and having age ${this.age}`)
}
userDetail.prototype.age= 20
let newuser=new userDetail('ram','mumabi')
let newuser2=new userDetail('manoj','pune')
console.log(newuser.age)


// A generator function is a function that returns a Generator object, and is defined by the 
// // function keyword followed by an asterisk (*), as shown in the following:
// and it return iterable Generator object.
// Unlike regular functions, generators cannot be constructed 
// with the new keyword, nor can they be used in conjunction with arrow functions.
function*generatorFunction(){
return 'hellow '
}
generatorFunction()
const generator=generatorFunction()
console.log(generator)
console.log(generator.next())
console.log(generator)

//
function findlargenumber(){
  console.log(arguments)
  return Math.max(...arguments)
}
// findlargenumber(10,20,2,80,5,888)
console.log(findlargenumber(10,20,2,80,5,888))

// arrow function

// arrow fucntion is are something which is came in e6 version in 2015
// it is newer way of write a function
//shorter syntax removve functuional keyword removed return keyword if there is
//onlt one statement
// normal function vs arrow function
//syntax
// fuction decleration aprroch not use expression aprroch is use
// duplication of parmetrr not allwoed in both strict non-strict mode in arrow
//no prototype object for the arrow function 
//cannot invoked with a new keyword
//Unlike regular functions, arrow functions don’t have their own this binding.
// function proto(){
//   let obj4={name:'kartik'}
// }
// console.log(proto.prototype)
// let protoforarrow=()=>{

// }
// console.log(protoforarrow.prototype)

// const newkeyword=(name)=>{
//   this.name=name
// }
// let person1=new newkeyword('rahul')
// console.log(person1)


// function dublication(a,a,a){
//   console.log(a)
// }
// dublication(11,22,33)

// const dublicationArrow=(b,b,b)=>console.log(44,55,66)

var hundredmultiplier=(a)=>a*100
console.log(hundredmultiplier(10))
var hundredmultipliercopy=a=>a*100
console.log(hundredmultipliercopy(10))

var hundredmultiplier=()=>100
console.log(hundredmultiplier())


//
function agecalculator(){
  console.log(this)
}
agecalculator()

function ageCalculator1(){
  let arrowf=()=>{
    console.log(this)
  }
  console.log(arrowf)
  }
  ageCalculator1()  
   
  
  for(let i=1;i<=5;i++){
    let interval=setTimeout(()=>{
      console.log(i)
    },2000*i)
    clearInterval(interval)
    console.log(interval)
  }
  
  
 let user1=()=>{
  return new Promise((res,rej)=>{
    let a=20;
    let b=20;
    if(a===b){
      res()
      console.log('a and b are equal')
    }else{
      rej()
      console.log('a and b are equal')
    }
  })
 }
  user1('ram').then((data)=>{
console.log(data)
  }).catch((e)=>{
    console.log(e)
  })

  // callling the promices is called has handling the promices
  //json json stand for javascript object notation 
  // json is light weight data-inchange format
  //jason is use to send the dta between camputors
  //jason is language independent
  //the json forat is sysntheticlly similar to te code 
  //for creating javascript object due to which javascript program can easily convert 
  // json data into javascript object
  // for converting javascript object data into  json format we use json.stringify()
  // and vice versa to convert jsi=on into js object json.parse()

  //fetch api
  //the fetch api provied a javscript interface for accesing and maipulating
  //part of the protocol such as request and resposce
  //for making a request and featching a resorse use fetch method .the fecthc method takes 
  //mandortory argument the 
  //step to call and get data from api
  //make a call to fectch methd and passec the arguemt as api url
  //fetch return promices so we can use .then and recive responce object
  //then call .json() which is again reutrn promice then use .then and get acces to thr data
  fetch('https://jsonplacefolder.typicode.com/posts')
  .then((res)=>{
    return res.json()
    console.log(res)
  })
  .then((dta)=>{
console.log(dta)
  }).catch((e)=>{
console.log(e)
  })
  console.log(fetch())

  // to send the dta
  const data2={
    name:'vitthal',
    email:'vitthalshelke@gmail.com'
  }
  fetch('https://jsonplacefolder.typicode.com/posts',{method:"POST",
body:JSON.stringify(data2),headers:{'content-Type':'application/json'}})
*/

