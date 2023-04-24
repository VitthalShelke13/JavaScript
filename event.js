
let addbutton =document.getElementById('add')
console.log(addbutton)
let addSubstract =document.getElementById('Substract')
console.log(addSubstract)
/*
function Handler(){
    console.log('Clicking on the Add Button') // pasing function is one method
}
addbutton.addEventListener('click', Handler)

// arrow function, call back function, anynomus function
addSubstract.addEventListener('mousemove', () =>{ //using arrow function is second method
    console.log('mousemove')
})

// add limit 
let hovertime = 0

addbutton.addEventListener('mouseleave', ()=>{
    hovertime++
    console.log('hovering the mouse'+hovertime +' time') 
})


let countime = document.getElementById('counttimes')
console.log(countime)

addbutton.addEventListener('mouseleave', ()=>{
    if(hovertime<10){

    
    hovertime++
    console.log('hovering the mouse'+hovertime +' time') 
    countime.innerText = hovertime}
    
})
*/

function AddToCart(ev){
    console.log(ev)
    console.log('item added to cart')
}

// function hovering(){
//     console.log('item hoverd')
// }

//  function changename(ev){
//     console.log(ev) //
//     console.log(ev.target)
//     console.log(ev.target.value)
//     console.log('changr the name')
//  }
// let Entername;
//  function changename(ev){
//     console.log(ev.target.value)
//     Entername = ev.target.value
//  }
//   function printname(){
//     document.getElementById('name-continer').innerText =Entername;
// }


//Event Propagation
//Event bubli

function outermost(){
    console.log('outermost')
}

function outer(ev){
    // ev.stopPropagation()
    console.log('outer') 
}
function inner(ev){
    console.log('inner')
}

//event caputering
// if we put third value as true it start from outermost to inner //
// it we put third value negative or nothing use on third posstion it retun from inner to outermost
document.getElementById('outermost').addEventListener('click', outermost, true)
document.getElementById('outer').addEventListener('click', outer, true)
document.getElementById('inner').addEventListener('click', inner, true)
/**/
