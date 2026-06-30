console.log("Hello, World!");
// document.write("This is java script.");
// alert("This is an alert message.");

let stock={
    name: "Tata",
    price: 1000,
    category: "Nifty"
}

for(const [key, value] of Object.entries(stock)){
    // console.log(`${key}: ${value}`);
}

array=[1,2,3,4,5,6,7,8,9];
array.push(10);
array.pop();
array.shift();

let products = [
    {name: "Apple", price: 100},
    {name: "Banana", price: 50},
    {name: "Orange", price: 75}
]

products.map((p)=>{
    // console.log(p.name);
})

let prices= products.filter((p)=>{
    return p.price>70;
})

let total= products.reduce((acc, p)=>{
    return acc+p.price;
}, 0);


// ASYNC SCRIPTING
// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// }, 2000);
// console.log("3")

// Promise using .then and .catch
let payment=new Promise((resolve, reject)=>{
    let success=false;
    if(success){
        resolve("Payment Successful");
    }else{
        reject("Payment Failed");
    }
})

payment
.then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message); //catch is not executed yet. stored in queue for when all synchronous code is executed.
})

// Promise using async and await
function getNumber(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(10);
        },2000);
    });
}

async function demo(){
    console.log("A");
    let value = await getNumber(); // wait for the promise to resolve. 
    // all synchronous code done since demo() paused and nothing after that. catch executed here. 
    console.log(value);
    console.log("Done");
}

demo();
