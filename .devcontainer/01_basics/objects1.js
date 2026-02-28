//singleton

//object literals
// Object.create//constructer method

const mySym = Symbol("Key1")//declaring a symbol

//non singleton object
const user={
    name:"Gaurav",
    "full name":"Gaurav Jaiswal",
    [mySym]:"myKey1",//symbol is add in the object
    roll:72,
    branch:"CS-AI",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["monday","tuesday"]

}

//2 methods to access values
console.log(user.name);//method 1
console.log(user["full name"]);//method 2
console.log(user[mySym]);

// Object.freeze(user)//freeze all the valuse of the object

user.name="Saurav"

// console.log(user);//value didn't change because of freeze method

user.greeting=function () {
    console.log(`Hello JS users,${this.name}`);
    
}
console.log(user.greeting());
