const odd=[1,3,5,7]

const even=[2,4,6,8]

const all=odd.concat(even)

console.log(all);

const another_arr=[1,2,3,[4,5,6],3,6,[8,6,[5,2]]]

const real_another_arr=another_arr.flat(Infinity)//infinity is the depth of the array


console.log(real_another_arr);


console.log(Array.isArray("Gaurav"));

console.log(Array.from("Gaurav"));//convert to array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


