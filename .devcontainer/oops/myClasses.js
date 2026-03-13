// ES6

class User {
    constructor(username, email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password} abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1=new User('gaurav','123@gmail.com','123456789')

console.log(user1.encryptPassword());
console.log(user1.changeUsername());


//
