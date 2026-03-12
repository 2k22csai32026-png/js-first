function multi(num){
    return num*5
}
multi.power=2
console.log(multi(5))
console.log(multi.power);
console.log(multi.prototype);

function createuser(username, score){
    this.username=username
    this.score=score

}

createuser.prototype.increment=function(){//This means Gaurav can access all prototype methods.
    this.score++
}

createuser.prototype.printMe=function(){//This means Gaurav can access all prototype methods.
    console.log(`this is ${this.score}`)
    
}

const Gaurav= new createuser("Gaurav",72)
const jaiswal=new createuser('jaiswal',32)

Gaurav.printMe()