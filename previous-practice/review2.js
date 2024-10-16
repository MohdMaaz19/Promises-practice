// function createRandomNumber(callback){
//     const delay =Math.floor(Math.random()*10);
//     setTimeout(()=>{
//         const number = Math.floor(Math.random()*10);
//         callback(number)
//     },delay*1000)

import { rejects } from "assert";
import { resolve } from "path";

// }

// createRandomNumber((err,number)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(number)
//         createRandomNumber((err,number)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(number)
//             }
//         })
//     }
//     })

    // createRandomNumber((number)=>console.log(number))
    // createRandomNumber((number)=>console.log(number))
    // createRandomNumber((number)=>console.log(number))


// function randomDirectory(){
//     return new Promise((resolve, reject) => {
//         const randomNumber = Math.random()
//         resolve(randomNumber)
//     })
// }

// randomDirectory()
// .then((number)=>console.log(number))
// .then(()=>randomDirectory())
// .then((number)=>console.log(number))


// function generateRandomNumber(callback){

// }


function randomNumber(){
    return new Promise((resolve,reject)=>{
        const randomDelay = Math.random();
        setTimeout(()=>{
            const randomNumber = Math.random();
            resolve(randomNumber)
        },randomDelay)
    })
}