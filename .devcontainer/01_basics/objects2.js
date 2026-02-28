const tinderUser = new Object();//singleton object

// console.log(tinderUser);

tinderUser.id="1"
tinderUser.name="Sam"

// console.log(tinderUser);

const regulatUser ={
    email:"abc@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Gaurav",
            lastName:"Jaiswal"
        }
    }
}
// console.log(regulatUser.fullName.userFullName);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3=Object.assign({},obj1,obj2)

console.log(obj3);

