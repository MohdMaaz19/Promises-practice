// function randomNumber(){
//     return new Promise((resolve)=>{
//         const randomDelay = Math.random()

//         setTimeout(()=>{
//             const randomNumber = Math.random();
//             resolve(randomNumber)
//         },randomDelay)
//     })
// }

// async function generateSequentially(){
//     const num1 = await randomNumber()
//     console.log(num1);

//     const num2 = await randomNumber()
//     console.log(num2)

//     const num3 = await randomNumber()
//     console.log(num3)
    
// }

// generateSequentially()


function createRandomNumber(){
    return new Promise((resolve) => {
        const delay = Math.random();
        setTimeout(()=>{
            const randomNumber = Math.random();
            resolve(randomNumber)
        },delay)
    })
}


    const promises = [];

    for(let i=0;i<3;i++){
        promises.push(createRandomNumber())
    }

    const numbers = Promise.all(promises)
    let sum =0;
    numbers
    .then((numbers)=>{
        numbers.forEach((element)=>sum=sum+element)
        return sum
    })
    .then((sum)=>console.log(sum))



