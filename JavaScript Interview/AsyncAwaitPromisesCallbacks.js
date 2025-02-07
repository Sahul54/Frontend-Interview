// Callback Function
// Callback function is a function passed as an argument to another functon and exrend later;

// function fetchData(callback){
//     setTimeout( ()=>{
//         console.log("data fetch.")
//         callback("Here is your data");
//     }, 5000)
// }

// function processData(data){
//     console.log("processing", data); 
// }

// fetchData(processData)

// 2. Promises
// A Promise represents a value that might be available now, later, or never. It has three states:

// Pending → Initial state
// Resolved (Fulfilled) → When the operation succeeds
// Rejected → When the operation fails


function fetchData(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let sucess = true;
            if(sucess){
                resolve("Data fetch sucessfully...")
            }
            else{
                reject("Error fetching data...")
            }
        }, 2000);   
    });
}

// // Handling promises using .then() and .catch()

// fetchData()
//     .then((data) => {
//         console.log(data); // Runs if promise is resolved
//     })
//     .catch((error) => {
//         console.error(error); // Runs if promise is rejected
//     });

// Async data way data fetching..........
// async function getData() {
//     try {
//         const data = await fetchData();
//         console.log(data); // Waits for the Promise to resolve
//     } catch (error) {
//         console.error(error); // Catches any errors
//     }
// }

// getData();


// API Calling to data fetching

// const data = "https://jsonplaceholder.typicode.com/posts/1";
// async function fetchData() {
//     try{
//         const getData = await fetch(data);
//         const finalData = await getData.json(); 
//         console.log(finalData);
        
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// fetchData();


const cartData = 'https://dummyjson.com/carts';

async function fetchData() {
    try{
        const data = await fetch(cartData);
        const finalData = await data.json();
        console.log(finalData);
    }
    catch(err){
        console.log(err);
    }
    
}

fetchData();