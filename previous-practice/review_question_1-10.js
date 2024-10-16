
// function printNumbers(callback,number){
//     setTimeout(()=>{
//         callback(number)
//         // console.log(number);
//     },1000*number)
// }

// for(let i=1;i<11;i++){
//     printNumbers((number)=>{
//         console.log(number)
//     },i)
// }

// function randomNumber(number){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(number)
//         },1000*number)
//     })
// }

// for(let i=1;i<11;i++){
//     randomNumber(i)
//     .then((number)=>console.log(number))
// }

function randomNumber(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, 1000);
    });
}

async function printAllNumbers(){
    for(let i=1;i<11;i++){
    const answer = await randomNumber(i)
    .then((number)=>console.log(number))
}
}
printAllNumbers();