class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username ${this.username}`)
        

    }

    static createID(){//static meand do not give access to everyone
        return `123`
    }
}

const user1= new User('Gaurav')
console.log(user1.createID())