//prototype

// let myName='Gaurav    '

// console.log(myName.truelength);


let myHeroes=['Spiderman','IronMan']

let heroPowers={
    Spiderman:'web',
    IronMan:'armor',

    getSpiderPower:function(){
        console.log(`${this.Spiderman}`);
        
    }
}

Object.prototype.gaurav=function(){
    console.log('gaurav is present in all objects');
    
}
heroPowers.gaurav()
heroPowers.getSpiderPower()
myHeroes.gaurav()


// array-
//       -
//         -
// function------object-----> null
//          -
//        -
// String-   
//they all pass through object so we can inject prototype function to object
//and it will inherit by all of them



//inheritance

const user={
    name :'user1',
    id :1
}

const Teacher={
    makeVideos:true
}

const TeachingSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport //it inherit the properties of Teaching support
}

Teacher.__proto__=user//teacher inherits the properties of user


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)//TeachingSupport access the properties of Teacher

const name='Gaurav    '

String.prototype.trueLength=function(){
    console.log(this.trim().length);
    
}

name.trueLength()