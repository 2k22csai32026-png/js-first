
if(true){

    let a=10
    const b=20
    var c=30

}

// console.log(a); not run because the scope is inside the {}
// console.log(b); not run because the scope is inside the {}
// console.log(c);//run because var has no scope and creates problem

function one(){
    const username="Gaurav"

    function two(){
        const website="Youtube"
        console.log(username);
        
        
    }
    // console.log(website);//throws an error because it is out of the scope of two()

    two()
}
one()
// one() cannot access the variables pf the two()
// but two() can get the access of one()
