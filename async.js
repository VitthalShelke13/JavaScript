//ascncronous code runs in parallel this means that an operation can occur while another one is still procesing
//settimeout is method in which we pass first argument as a function whic we want excute and second argument
//is passed time in millisecond
//settimeout allows us to run function once after the interval of time


// console.log('start')


// function printone(){
//     console.log("one")
// }

// setTimeout(printone, 2000)

// setTimeout(()=>{
//     console.log('2')
// },5000)

// for(var i =0; i<=5;i++){
//     print(i);
//     }
    // function print(i){
    //     setTimeout(()=>{
    //         console.log(i)},i*2000)}

            // // for(let i=1;i<5;i++){
            // //         setTimeout(() => {
            // //             console.log(i);
            // //         },i*2000);
            // //     }
            // for(let i=1;i<5;i++){
            //         setTimeout((val) => {
            //             console.log(val);
            //         },i*1000,i);
            //     }
                
        //     for(let i=1;i<7;i++){
        //         setTimeout(function(val){
        //             console.log(val)
        //         },i*2000,i)
        //     }
        // for(let i=10;i<16;i++){
        //     console.log(i)
        // // }
        //  function print1(){
        //     console.log('vitthal')
        //  }

        // setTimeout(print1,0)



/*
        function printTwo(){
            console.log('Two')
        }

        let set4 = setTimeout(printTwo, 1000);//when we store a settimeout method it give memory refference
        console.log(set4);
        
        function printOne(){
console.log('one')
        }
        let set3 = setTimeout(printOne, 4000);
console.log(set3);

function test(){
    console.log('vitthal')
    
    setTimeout(()=>{
        console.log('Three')
    },3000)
    function test2(){
          
    setTimeout(()=>{
        console.log('Four')
    },2000)

    setTimeout(printFive,0)
    console.log('shelke')

    }
    test2()
}
test()


function printFive(){
    console.log('five')
}


console.log('end')
// settimeout method always execute after javascript
//settimeout is not a jawascript part it is part of browser


// SetIntervals
setInterval(()=>{
    console.log(10)
},3000)

*/
/*
// facebook login
//after clicking on login button check that
//check that user is a valid user
// get details of the user


function userdetails(username){
    if(username==='vitthal'){
        console.log('valid user')
        setTimeout(getdetails,2000)
    }else{
        console.log('unvakid user')
    }  
}

function getdetails(){
    console.log('detsils are ....')
    setTimeout(getmessages,3000)
}
function getmessages(){
    console.log('measage are this')
}
// this above are indepedeble on each otherv but facebook login case detsils are ondepend each other for that
// we use setimeout in it rather than seprate calling
*/


// callback hell
 // when  their are multiple callback function which should have dependable code 
 //and callback has to be call one after other. it form an arrow like structre by creating a nesting of 
 // callback functon.its called as a callback hell
 // it is very unmaangeble from and very less readable as sell 
 // to solve this callback hell problem we have promices

/*
 // creating callback hell

 setTimeout((username, pwd)=>{
    console.log('username ' +username);
    console.log('password ' +pwd);
    //database check
    let userID='123'
    setTimeout((userid)=>{
        console.log('id ' +userid)
        let friendlist =['ram','shyam','lakhan']
        setTimeout((friendlist)=>{
            for(let i=0; i<friendlist.length;i++){
                console.log(friendlist[i])
                setTimeout((friendname)=>{
                    console.log(friendname+ ' meassage')
                },1000*i,friendlist[i])
                console.log('meassage')
            }
        },2000,friendlist)

    },2000,userID)
 },2000,'vitthal','12345')

*/


 // promice
// promice is an object that represent the eventual completion or failurevof an asychrnous operation
// and its resulting value.
//promice object is use to create promices.
// promices as three stage 
//pending-neither fullfill nor rejected
// fullfiled - sussful
// rejected- unsuccesful

//promice creation
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

/*
//handling promises
//calling of the promises is called as handling of the promises


// fetchUserId('vitthal')
// .then((id)=>{
//     console.log('successfully fithched id')
//     console.log(id)
// })
// .catch((e)=>{
//     console.log('id not match')
//     console.log(i)
// })
// fetchUserId('Suraj')
// .then((id) => {
//     console.log('successfuly fetched id');
//     console.log(id);
// })
// .catch((e) => {
//     console.log('unsuccessful in fetching id');
//     console.log(e);
// })

*/

/*
//chaining of promises

fetchUserId('vitthal')
.then((id) => {
    console.log('successfuly fetched id');
    console.log(id);
 
    return getFriendlist('123')
})
.then((fList) => {
    console.log(fList
        );
    return GETMESSAGE(fList);
})
.then((mesg) => {
    console.log(mesg);
})
.catch((e) => {
    console.log(e);
    if(e==='user not found'){
        console.log('failed at step 1' );
    }else if(e==='userId is not valid'){
        console.log('failed at step 2' );
    } else{
        console.log('friends not found');
    }
})
.finally(() => {
    console.log('finished');
})
 
*/
// calling of the multiple promices

//it takes array of promises 
//return array of value if all the promices are succesful
//if any of the promises get failed catch block will be excuted.
//if multiple promises are failing then who ever is the first on that will reach the catch block

// Promise.all([fetchUserId('vitthal'),getFriendlist('123'),GETMESSAGE(['ganesh', 'babu', 'satyam'])])
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


Promise.allSettled([fetchUserId('vitthal'),getFriendlist('123'),GETMESSAGE()])
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

