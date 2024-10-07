//print numbers 1-10

//Using callback
// function printNumbers(callback,num){
//     setTimeout(()=>{
//         callback(num);
//     },num*1000)
// }

// for(let i=1;i<11;i++){
//     printNumbers((num)=>{
//         console.log(num);
//     },i)
// }

//using promise

// function printNumbers(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num);
//         },1000*num)
//     })
// }

// for(let i=1;i<11;i++){
//     printNumbers(i)
//     .then((num)=>console.log(num))
// }

//using async await

// function printNumbers(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num);
//         },1000)
//     })
// }

// async function printNumbersLoop(){
//     for(let i=1; i<11;i++){
//         const ans = await printNumbers(i)
//         .then((result)=>console.log(result))
//     }
// }

// printNumbersLoop()