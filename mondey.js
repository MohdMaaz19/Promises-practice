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

//Concat strings in array
//Using callback
const array = ['I','am','trying']
let finalString = ""

// function concatString(callback,index){
//     setTimeout(()=>{
//         callback(array[index]);
//     },1000*(index+1))
// }

// for(let i=0;i<array.length;i++){
//     concatString((string)=>{
//         finalString +=(string+" ");
//         console.log(finalString);
//     },i)
// }

//Using promise

function stringPromise(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const string = array[index];
            resolve(string);
        }, 1000);
    });
}

function processString(){
    let promise = Promise.resolve();
    for(let i=0; i<array.length;i++){
        promise = promise.then(() => stringPromise(i))
        .then((string)=>{
            finalString +=string+" ";
            console.log(finalString)
        })
    }
}

processString()