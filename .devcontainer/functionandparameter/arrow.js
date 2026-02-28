const user={
    username:"Gaurav",

    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        // this refers to the current context
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username="jack"//we change the context
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()

//arrow function
const chai= () => {
    // console.log(this);
    
}
chai()

// const add= (num1,num2)=>{
//     return num1+num2 //explicit return
// }
// console.log(add(2,4));


// implicit return
// const add = (num1,num2) => num1 + num2 //technique 1
const add = (num1,num2) => (num1 + num2)//technique 2

console.log(add(2,4));