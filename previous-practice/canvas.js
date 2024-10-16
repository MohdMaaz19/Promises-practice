// const ans = []
// function createRandomNumber(callback,index){
//     const randomDelay = Math.random();
//     setTimeout(()=>{
//         const randomNumber = Math.random();
//         callback(randomNumber,index);
//         console.log(ans)
//     },randomDelay*10000)
// }

import { error } from "console";

// createRandomNumber((number)=>{
//     console.log(number);
//     createRandomNumber((number)=>{
//         console.log(number);
//         createRandomNumber((number)=>{
//             console.log(number);
//         })
//     })
// })

// createRandomNumber((number,index)=>{console.log(number)
//     ans[index]=number
// },0)
// createRandomNumber((number,index)=>{console.log(number)
//     ans[index]=number
// },1)
// createRandomNumber((number,index)=>{console.log(number)
//     ans[index]=number
// },2)


function generateRandomNumber(){
    return new Promise((resolve) => {
        const randomDelay = Math.random();
        setTimeout(()=>{
            const randomNumber = Math.random()
            resolve(randomNumber)
        },randomDelay)
    })
}

// const const1 = generateRandomNumber()
// const1
// .then((number)=>{
//     console.log(`Number 1: ${number}`)
//     return generateRandomNumber()
// })
// .then((number)=>console.log(number))

const promises = []
promises.push((generateRandomNumber()));
promises.push((generateRandomNumber()));
promises.push((generateRandomNumber()));

function cunstomPromiseALl(promises){
    const result = new Array(promises.length);
    let promisesResolved = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise,index)=>{
            promise
            .then((val)=>{
                result[index] = val;
                promisesResolved++;
                if(promisesResolved===promises.length)
                    resolve(result)
            })
            .catch((error)=>{
                resolve(error)
            })
        })
    })
}

cunstomPromiseALl(promises)
.then((result)=>{
    let sum =0
    console.log(result)
    result.forEach((val)=>sum=sum+val)
    return sum
})
.then((sum)=>console.log(sum))


