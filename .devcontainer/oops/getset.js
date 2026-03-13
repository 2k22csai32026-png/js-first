//GETTER SETTER

class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this.pass.toUpperCase()
    }
    set password(value){
        this.pass=value
    }
}
const user1=new User('abc@gmail.com','1234567890')

console.log(user1.password);
console.log(user1.email);

