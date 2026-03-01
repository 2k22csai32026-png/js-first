// const arr=[1,2,3,4]
// for (let i = 0 ; i< arr.length ; i++){ 
//     console.log(arr[i]);
// }

//for of loop

const arr=[1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
    
}

const greeting="hello"
for (const ele of greeting) 
    {
    // console.log(`Each char is ${ele}`);
    
}

const map =new Map()//dont have duplicate values and dont change the order

map.set('IN','India')
map.set('USA', 'America')

console.log(map);
for (const [key,val] of map) {
    // console.log(key,val);
    
}

const myObj = {
        'game1':'GTA',
        'game2':'NFS',
        'game3':'Resident Evil'
    }

for (const [key1,val1] of myObj) {
    console.log(key1,val1);
    
}