let data=document.getElementById('add')

data.addEventListener('change',()=>{
    console.log('value change')
})

let Person = 'VITTHAL'
// for(let i=Person.length-1;i>=1;i--){
//     console.log(Person.charAt(i))
//     console.log(i)
// }
 let person1=Person.split('')
 console.log(person1)
 let name1=person1.reverse()
 console.log(name1)
 let Join =name1.join('')
 console.log(Join)
 console.log(Person.split('').reverse().join(''))
 
 // remove dublicate
  var removedublicate=[1,2,3,4,11,33,2,3,11]
let array=removedublicate.filter((el,index)=>
removedublicate.indexOf(el)===index

)
console.log(array) 

let z=[...new Set(removedublicate)]
console.log(z)

var arr = ["apple", "mango", 
        "apple", "orange", "mango", "mango"];
      
    function removeDuplicates(arr) {
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
    console.log(removeDuplicates(arr));


 