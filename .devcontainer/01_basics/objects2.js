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

// array of object

user=[
    {
        1:"a"
    },
    {
        2:"b"
    },
    {
        3:"c"
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));//if the property present in the object

