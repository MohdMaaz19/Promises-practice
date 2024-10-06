// const basicPromise= new Promise((resolve,reject)=>{

//     const success = false;

//     if(success){
//         resolve("Operation successful!")
//     }else{
//         reject("Failed!!")
//     }
// });

// basicPromise
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })

// const rejected = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("Task Failed!"),2000)
        
//     })

// rejected
//     .catch((error)=>{
//         console.error(error)
//     })

const newPromise = new Promise((resolve,reject)=>{

    let a=true;
    if(a){
        resolve("Everything is fine");
    }else{
        reject("Oops!!")
    }
})

newPromise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.error(message);
})