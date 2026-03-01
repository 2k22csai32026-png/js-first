const code=["java","js","python","ruby"]
//for each do not return the values
//filter

// const nums=[1,2,3,4,5,6,7,8,9]

// const num=nums.filter((i)=>i>4)
// console.log(num);
const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 450,
        pages: 320,
        available: true
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 399,
        pages: 336,
        available: true
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        pages: 208,
        available: false
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 550,
        pages: 464,
        available: true
    }
];

const userbooks =books.filter( (bk)=> bk.price>400)
console.log(userbooks);
