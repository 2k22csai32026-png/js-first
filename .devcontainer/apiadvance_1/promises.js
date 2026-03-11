const promiseOne=new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, network call
    setTimeout(function(){
        resolve()//it connect resolve with then()
        console.log('Async task is complete');
        
    },1000)
})


promiseOne.then(
    function(){
        console.log('promise consumed');
        
    }
)//resolve is connected with .then()

//when you dont want to store it into a variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 1");
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'Gaurav', email:"123@gmail.com"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'Gaurav',password:'12345678'})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
    
})
//catch for error

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(err){
    console.log(err);
    
}).finally(()=>console.log('The promise is either resolved or rejected')
)

//using async await instead of then

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:'Gaurav',password:'12345678'})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    // const response=await promiseFive
    // console.log(response);
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://dummyjson.com/users')
//         const data = await response.json()   // await is required
//         console.log(data);
    
//     } catch (error) {
//         console.log("Error handled");
//     }
// }

// getAllUsers();

fetch('https://dummyjson.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=> console.log(error)
)