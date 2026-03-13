//tell the hidden info about object
const descriptor=Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(Math.PI);
// console.log(descriptor);

const pizza={
    name:'Margageta',
    prize:'2000',
    available:true,
    orderpizza:function(){
        
        console.log('pizza order');

    }
}



Object.defineProperty(pizza,'name',{
    writable: false,
  enumerable: false,//it will be iterate if it is flase
  configurable: true
})
const pizza1= Object.getOwnPropertyDescriptor(pizza,'name')
console.log(pizza1);

for (let [key,value] of Object.entries(pizza)) {
    if(typeof value !== 'function'){
   console.log(`${key}:${value}`);
    }
}