// a string is a sequence of one or more charector that may consist of letters num. or symballs
// string in javascript are primative data type and it is immutable
/*
var name = 'vitthal'
var role = "student"
let str = new String("shelke")
console.log(name.length)
console.log(role)
console.log(str)
let statement = "it's me"
console.log(statement)

let statement1 = "this is\" vitthal shelke\""
console.log(statement1)// output this is "vitthal shelke"

//string method 
 // 1) slice

 let Str1 ='vitthalshelke'
 let Str2 = Str1.slice(0,10)// we also use negative value in the slice
//   let Str2 = Str1.slice(-10,-1)
 console.log(Str2)

 //2)method substring
 // it is similar to slic but we cant use negative parameter
 let str3 = 'buldana is my city'
 let str4= str3.substring(0,6)
 console.log(str4)// output buldan

 //3) method replace

let str5 = "this is a vitthal"
let newstr5 = str5.replace("this","IT")
console.log(newstr5)

//4) touppercase

let str6 = 'i am from buldana'
let newstr6 = str6.toUpperCase()
console.log(newstr6)//output I AM FROM BULDANA
 
//5) trim
//it remove white both space from start and end it  and also have submehtod like starttrim and endtrim

let str7 = "   HI!!!!!"
console.log(str7)
console.log(str7.length)
let newstr7= str7.trim()
console.log(newstr7)
console.log(newstr7.length)

//search

let str8 = " javaScript and node-js"
let newstr8 = str8.search("and")
console.log(newstr8)

let str9 = "javascript javascript1"
let newstr9 =str9.search(/javascript1/d)
console.log(newstr9)
let str10= str9.indexOf('javascript')
console.log(str10)

//index0f

let stat = 'vitthal is my name'
let stat1 = stat.indexOf('is')
console.log(stat1)
let stat2 = stat.indexOf('i')
console .log(stat2)
let stat3 = stat.indexOf("i",5)
console.log(stat3)
*/


// date object
//javascript date object is use for to get year month and day
//time stamp is use for unicness
// it give the time from 1 jan 1970.
// we can pass upto 7 parameter and atleast 2 parameter nedded if we pass in date for 1 parameter it not work
 let today = new Date() 
 console.log(today) // give time in format 'day, year, month, date, hour, minute, second'

   let time = new Date(2021,11,31,25,2,5,1000) // year month date time minute secnd milisecond
  console.log(time)
  let time1 = new Date(12)// one parameter give result thu 1jan 1970
  console.log(time1)

  // it convert milisecond to date format
  let month =new Date()
  console.log(month.toDateString())

  let date = new Date()
  console.log(date.getDay()); // day start from sunday and number start form 0 to 6 week not 1 to 7
console.log(date.getHours());// hour start from 0 to 23 not a 1 to 24 if we use 24 it can count 23+2 i.e,2 hour of next day
console.log(date.getMinutes()); //minute start from o to 60
console.log(date.getMilliseconds()); // it start from 0 to 999
console.log(date.getMonth()) // month start from 0 to 11 like 0 month is jan and 11 month is dec not 1to12
console.log(date)


  