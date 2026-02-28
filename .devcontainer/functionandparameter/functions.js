function sayMyNAme(){
    console.log("Gaurav");
    
}

// sayMyNAme()

function add(a, b){
    let c=a+b
    return c
    // console.log(c);
}

let res=add(2,5)
// console.log(res);

function login(username){
    if(username===undefined){
        console.log("Please enter the name. ");
        return
    }
    return `${username} just loged in`
}

const user = login()
// console.log(user);

function calcCartPrice(...num1) {//rest or spread operator
    //wrap the arguments in one array
    return num1
}

console.log(calcCartPrice(200,300,400));

