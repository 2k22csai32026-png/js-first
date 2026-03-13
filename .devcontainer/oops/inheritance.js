class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(this.username);
        
    }

    
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)//inherit the username
        this.email=email
        this.password=password
    }
    returnDetails(){
        return `name: ${this.username}, email: ${this.email}, password:${this.password}`
    }
}
const user1=new User('Gaurav')
const t1=new Teacher('Saurabh','123@gmail.com','1234')

console.log(user1.logMe());
console.log(t1.returnDetails());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher('iphone','123@gmail.com')

iphone.logMe()




