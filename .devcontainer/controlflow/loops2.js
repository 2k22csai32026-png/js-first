const myObj={
    js:'Javascript',
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"

}

for (const key in myObj) {
    //   console.log(myObj[key]);//for values
}

const programming =["js","python","cpp"]
for (const key in programming) {
    console.log(programming[key]);//print values
    console.log(key);//print index 
}

