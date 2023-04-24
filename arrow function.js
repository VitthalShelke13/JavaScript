// for(var i =0; i<=5;i++){
// print(i);
// }
// function print(i){
//     setTimeout(function(){
//         console.log(i)},i*2000)

//     }
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let filterarry = arr.filter(function(any){
//     return any % 2 === 0 ;
// })
// console.log(arr)
// console.log(filterarry)

//Arrow Function
//arrow function are something which is came in E6 versin(ECMASCRIPT) in 2015.
//Newer Way to Write a function
// Shorter Syntex, removed function Keyword, remove curely Braces, removved Return Keyword if there is only one statement

/*
function test(){
    console.log('test')
}
test();

var test1 = function(){
    console.log('test1')
}
test1()

var test2= ()=>{
    console.log('test2')
    
}
test2()

function tenMultiplier(a){ // traditional way
    return a*10
}
console.log(tenMultiplier(10))

var twentyMultiplier = (a)=>{  //remove function keyword
    return a*20
}
console.log(twentyMultiplier(10))

var hundredMultiplier = (a) => a*100 //remove function keyword return key.also curly braces
console.log(hundredMultiplier(10))


var hundredMultiplier1 = a => a*100
console.log(hundredMultiplier1(20))

var thirtyMultiplier = () => 30  //if argument not present then bracket is came 
console.log(thirtyMultiplier())

*/

// this keyword

// this keyword always pointed towerd whose is caller of the function
/*
a=30

function calculateAge(Yearofbirth){
    console.log(this)
    return 2022-Yearofbirth

}
 calculateAge(1995)
// console.log(calculateAge(1995))

 let obj ={
    a:20,
    calculateAge: function(Yearofbirth){ //let and const does not attached to window function
        console.log(this) 

        console.log("somthing")
        return 2022-Yearofbirth
       
    } 
    
 }
 obj.calculateAge()
 */

 function calculateAge(yearofbirth){
console.log(this)
function test(){
    console.log(this)
    console.log('vitthal')
    function test1(){
        console.log(this)
        console.log('shelke')
    }
    test1()
}

test()
return 2022-yearofbirth
 }
console.log(calculateAge(1980))


let person ={
    name:"ram",
    yob:1990,
    calculateAge : function(){
console.log(this) //person
console.log(2022-this.yob)
let mythis=this;//closre  //if this is not present then 114 line print NAN not a number for this we use closere
function retirementtime(){
    console.log(this) //window
    let age=2022-mythis.yob // insted of this we use my this
    console.log(60-age)
}
retirementtime()

    }

}
person.calculateAge()

/*
let person ={
    name:"ram",
    yob:1990,
    calculateAge : function(){
console.log(this)//person
console.log(2022-this.yob)

let retirementtime = ()=>{
    console.log(this)//person
    let age=2022-this.yob
    console.log(60-age)
    var test = ()=>{
        console.log(this)//person
    }
    test()
}

retirementtime()


    }}
    person.calculateAge()
*/

