  let Enternumber;
  function changenumber(ev){
    console.log(ev.target.value)
Enternumber = ev.target.value
  }
let Entername;
  function changename(ev){
    console.log(ev.target.value)
Entername = ev.target.value
  }
let addtion;

  function add(){
    addtion =parseInt(Enternumber)+parseInt(Entername)
    document.getElementById('container').innerText =addtion  
  }
  let substract;
  function minus(){
   substract =parseInt(Enternumber)-parseInt(Entername)
    document.getElementById('container').innerText = substract
  }
  let muliplication;
  function multiplay(){
    muliplication=parseInt(Enternumber)*parseInt(Entername)
    document.getElementById('container').innerText = muliplication
  }
  let divide;
  function division(){
    divide=parseInt(Enternumber)/parseInt(Entername)
    document.getElementById('container').innerText = divide
    //document.getElementById('container').innerText = Entername
  }
 