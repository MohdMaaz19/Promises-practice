// Promise.runAll = function(promises) {
//     let result = new Array(promises.length); // Initialize an array to store results
//     let totalPromisesResolved = 0; // Counter for resolved promises
  
//     return new Promise((resolve, reject) => { // Return a new promise
//       promises.forEach((promise, index) => { // Iterate over the array of promises
//         promise
//           .then((val) => { // When the promise resolves
//             result[index] = val; // Store the result at the corresponding index
//             totalPromisesResolved++; // Increment the resolved promises counter
//             if (totalPromisesResolved === promises.length) // Check if all promises resolved
//               resolve(result); // Resolve the new promise with the results
//           })
//           .catch((err) => { // If the promise is rejected
//             reject(err); // Reject the new promise with the error
//           });
//       });
//     });
//   };
  

// Promise.allCustom = function(promises){
//     let result = new Array(promises.length)
//     let resolvedPromises = 0;

//     return new Promise((resolve, reject) => {
//         promises.forEach((promise,index) => {
//         Promise.resolve(promise)
//             .then((val)=>{
//                 result[index] = val;
//                 resolvedPromises++;
//                 if(resolvedPromises===promises.length)
//                     resolve(result)
//             })
//             .catch((error)=>{
//                 reject(error)
//             })            
//         });
//     })
// }


Promise.customizedAll = function(promises){

    const result = new Array(promises.length)
    let resolvedPromises = 0;

    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index) => {
            Promise.resolve(promise)
            .then((val)=>{
                result[index]= val;
                resolvedPromises++
                if(resolvedPromises===promises.length)
                    resolve(result)
            })
            .catch((error=>{
                reject(error)
            }))
        });
    })
}


function createRandomNumber() {
    return new Promise((resolve) => {
        const delay = Math.random() * 4000 + 1000; // Random delay between 1 and 5 seconds
        setTimeout(() => {
            const randomNumber = Math.random(); // Generate a random number
            resolve(randomNumber); // Resolve with the random number
        }, delay);
    });
}

// Example usage
const promises = [createRandomNumber(), createRandomNumber(), createRandomNumber()]; // Mix of promises and non-promises

let sum
Promise.customizedAll(promises)
    .then((results) => {
        console.log('All results:', results); // [<random_number>, 42, <random_number>]
    })
    .catch((error) => {
        console.error('Error:', error);
    });
