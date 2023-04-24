async function user(){
    let res=await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    return data
}

user()
.then((data) => {
    // for(let i =0; i<data.length;i++){
    //     console.log(data[i]);
    // }
    console.log(data);
})

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    console.log(res)// response obj
    return res.json()
})
.then((data)=>{
    console.log(data)
})


let fetchUser =(username)=>{
    return new Promise((resolve ,reject)=>{
        if(username==='vitthal'){
            setTimeout(()=>{
                resolve('123')
            },2000)
        }else{
            reject('user not found');
        }
       
    })
}
 let getfriendslist =(UserId)=>{
    return new Promise((res, rej)=>{
        if (UserId==='123'){
            let friendlist=['ram','shyam','rahul']
            setTimeout(()=>{
                res(friendlist);
            },4000)
        }else{
            rej('friendlist not found')
        }
    })
 }
  let getmessage =(friendlist)=>{
    return new Promise((res,rej)=>{
        if(friendlist){
        let obj={}
        for(let i=0;i<friendlist.length;i++){
            obj[friendlist[i]] = 'msg for ' +friendlist[i]
        }
        res(obj)
        }
        rej('friend not found')
    })

  }

  async function person(){
    try{
        let UserId = await fetchUser('vitthal')
        let friendlist = await getfriendslist('123');
        let friendsms  = await getmessage(friendlist)
        return friendsms
    }
    catch(e){
        console.log('error');
        console.log(e);
    }
  }

  person()
 .then((data) => {
     console.log(data);
 })

