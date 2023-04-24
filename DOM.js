// console.log(document.domain)
// console.log(document.URL)
// document.title = "my new title"
// console.log(document.all)
// console.log(document.all[4])
// console.log(document.links)
//    // document.write(" this is a gardeen")
// let documentbyid=document.getElementById('main-header')
// console.log(documentbyid)

// let documentbyclass=document.getElementsByClassName('card')
// console.log(documentbyclass)
// let tag = document.getElementsByTagName('div')
// console.log(tag)

//Queryselector

// in query selector we can pass anything like tag id , class selector name
//it will be select first match it is a html element base not gtml ollection base
// let div = document.querySelectorAll('div')
// console.log(div) // nodelist

// let queryclass = document.querySelector('.card')
// console.log( queryclass)
// // if we use doccuemnt. anything  and does no find matching it return NULL
// let queryid= document.querySelector('#main-header')
// console.log(queryid)

// let div1 = document.querySelector('.card.test')
// console.log(div1)
// let div2 = document.querySelector('p.card.test')
// console.log(div2)
// let selectp = document.querySelector('p')
// console.log(selectp)
// selectp.innerText='this is not vitthal' 
// console.log(selectp.innerText)

// // it change the inner test between tag
// selectp.innerText = selectp.innerText + 'this is ram'
// //it add text after privious one not change it concate it
// //inner.content aslo use



// inner tag change

// let selectmain = document.querySelector('main')
// console.log(selectmain)
// selectmain.innerHTML='<h3>ram</h3>'


// //atrribute selector
// let input= document.querySelector('input[type="password"]')

// console.log(input)

// //adding prodcut list

// let productitem = document.getElementsByClassName('prodcut')
// for(let i=0;i<productitem.length;++i){
//      productitem[i].innerText= 'product '+(i+1)
// }
// console.log(productitem)


// appendchild method

// let div4= document.querySelector('div.card')
// console.log(div4)
// let footer = document.createTextNode(' copyright all right reserved')
// div4.appendChild(footer)
// //addtag

// let footerele = document.createElement('p') //adding html tag inside another tag
// footerele.innerText ='it create html element p tag inside the div tag'
// div4.appendChild(footerele)
// footerele.className='my class'//it add class for that tag
// div4.appendChild(footerele)

// let body =document.body
// console.log(body)
// body.appendChild(div4)

/*
// //table formation
// let mytable = document.createElement('table')
// console.log(mytable)
// let thead = document.createElement('head')

// let trow = document.createElement('tr')

// console.log(trow)
// let th = document.createElement('th')
// let th1 = document.createElement('th')
// let th2 = document.createElement('th')
// console.log(th1)
// mytable.appendChild(thead)
// thead.appendChild(trow)

// trow.appendChild(th)
// trow.appendChild(th1)
// trow.appendChild(th2)
// th.innerText='sr. NO.'
// th1.innerText ='Roll No.'
// th2.innerText='Name'


let trow1 = document.createElement('tr')
let tcolum = document.createElement('td')
let tcolum1 = document.createElement('td')
let tcolum2 = document.createElement('td')
let tbody = document.createElement('tbody')
 mytable.appendChild(tbody)
 tbody.appendChild(trow1)
 trow1.appendChild(tcolum)
 trow1.appendChild(tcolum1)
 trow1.appendChild(tcolum2)
 tcolum.innerText='1'
tcolum1.innerText='H080205'
tcolum2.innerText='Vitthal Shelke'
let body = document.body
body.appendChild(mytable)

//table creation using function

let table = document.createElement('table')
let thead = document.createElement('thead')
let theadrow= document.createElement('tr')
table.appendChild(thead)
thead.appendChild(theadrow)

//function to create th and add data

function createThandAddData(data){

    let theadhead= document.createElement('th')
    theadhead.innerText = data
    return theadhead
}
// console.log(createThandAddData('phone'));
// console.log(createThandAddData('tv'));
// console.log(createThandAddData('bluthooth'));
// console.log(createThandAddData('laptop'));

theadrow.appendChild(createThandAddData('phone'))
theadrow.appendChild(createThandAddData('tv'))
theadrow.appendChild(createThandAddData('bluthooth'))
theadrow.appendChild(createThandAddData('laptop'))
console.log(theadrow)
console.log(table)

*/
























// // method outer children , first children ,last children
let outer = document.querySelector('.outer-container')
console.log(outer.parentElement) //it gives parent element of the element
console.log(outer.children) // it give children element
console.log(outer.children[1].children[1])//html collection work as array it give acces like arry 
console.log(outer.firstElementChild)
console.log(outer.lastElementChild)
console.log(outer.firstElementChild.lastElementChild)
console.log(outer.firstElementChild.firstElementChild)
console.log(outer.lastElementChild.lastElementChild)
