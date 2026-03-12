function SetUserName(username){
    this.username=username
}

function createuser(username,email,password){
    SetUserName.call(this, username)//this wll give the reference of Setusername and call it.
    this.email=email
    this.password=password
}

const user1=new createuser("Gaurav","123@gmail.com",'1234')
console.log(user1);
