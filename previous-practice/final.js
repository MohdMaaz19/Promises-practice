// let ans =[];
// function createRandomNumber(callback,index){
//     const randomDelay = Math.random();
//     setTimeout(()=>{
//         const randomNumber = Math.random();
//         callback(randomNumber,index)
//         console.log(ans)
//     },randomDelay*1000)

import { error } from "console";

// }

// createRandomNumber((number,index)=>{
//     ans[index] = number;
// },0)
// createRandomNumber((number,index)=>{
//     ans[index] = number;
// },1)

function generateRandom(){
    return new Promise((resolve) => {
        const randomDelay = Math.random();
        setTimeout(()=>{
            const randomNumber = Math.random();
            resolve(randomNumber)
        },randomDelay*1000)
    })
}

// generateRandom()
// .then((number)=>{
//     console.log(number);
//     return generateRandom()
// })
// .then((number)=>console.log(number))


// function cunstomPromiseALl(promises){
//     const result = new Array(promises.length);
//     let noOfResolvedPromise = 0;
//     return new Promise((resolve, reject) => {
//         promises.forEach((promise,index) => {
//             promise
//             .then((val)=>{
//                 result[index]=val;
//                 noOfResolvedPromise++;
//                 if(promises.length===noOfResolvedPromise)
//                     resolve(result)
//             })
//             .catch((error=>{
//                 reject(error)
//             }))
//         });
//     })
// }

// const promises = []
// promises.push(generateRandom())
// promises.push(generateRandom())
// promises.push(generateRandom())

// const numbers = cunstomPromiseALl(promises);
// numbers.then((numbers)=>{
//     console.log(numbers)

//     let sum=0
//     numbers.forEach((num)=>sum=sum+num)
//     return sum
// })
// .then((sum)=>console.log(sum))
