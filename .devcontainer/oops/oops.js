const user={
    username:'Gaurav',
    loginCount :8,
    signediIn:true,

    getUserDetail: function(){
        console.log('Got user details');
        console.log(`username: ${this.username}`);
        console.log(this);
//         {
//   username: 'Gaurav',
//   loginCount: 8,
//   signediIn: true,
//   getUserDetail: [Function: getUserDetail]
// }

    }
     
}
// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount = loginCount
    this.isLoggedIn=isLoggedIn
    getuser=function(){
        console.log(this.username);
        

    }
    // return this
}
 const userOne=new User('Gaurav',12,true)
 const usertwo=new User('Saurabh',11,false)
 console.log(userOne.constructor);
//  console.log(usertwo);
//  console.log(getuser());
 

 //new create new object called instance
 


