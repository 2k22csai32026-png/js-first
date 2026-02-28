//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();//call a function automatically and add ; to end the fuction

(
    () => {
        console.log("Hello world!");
        
    }
)();

(
    (Name) => {
console.log(`Name is ${Name}`);

    }
)("Gaurav");
