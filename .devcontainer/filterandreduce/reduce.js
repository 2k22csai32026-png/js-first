const myNum=[1,2,3]

// const initial=0
const myTotal=myNum.reduce(function(acc,curval){
    return acc+curval
},0)// 0 is the val of acc.

console.log(myTotal);
