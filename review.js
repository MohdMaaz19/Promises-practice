// import fs from 'fs'
// import path from 'path'

// fs.writeFile('./RandomFiles/file1.txt','File1',(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("File1 created")
//         fs.writeFile('./RandomFiles/file2.txt','File2',(error)=>{
//             if(error){
//                 console.log(error)
//             }else{
//                 console.log("File 2 created")
//                 fs.writeFile('./RandomFiles/file3.txt','File3',(error)=>{
//                     if(error){
//                         console.log(error)
//                     }else{
//                         console.log("File 3 created")
//                     }
//                 })
//             }
//         })
//     }
// })

//Using fs/promise
// const {default:fs} = await import('fs/promises')
// fs.writeFile('./RandomFiles/file1.txt','File 1')
// .then(()=>{return fs.writeFile('./RandomFiles/file2.txt','File 2')})
// .then(()=>{fs.writeFile('./RandomFiles/file3.txt','File 3')})
// .catch((error)=>console.log(error))

//Using new Promise
// import fs from 'fs'

// function writeFile(filePath, fileContent) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filePath, fileContent, (error) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve("File written successfully");
//             }
//         });
//     });
// }

// writeFile('./RandomFiles/f1.txt','f1')
// .then(()=>writeFile('./RandomFiles/f2.txt','f2'))
// .then(()=>writeFile('./RandomFiles/f3.txt','f3'))
// .catch((error)=>console.log(error))


//Using asyn-await
// const{default:fs} = await import('fs/promises')

// async function writeFile(filePath,fileContent){
//     return await fs.writeFile(filePath,fileContent)
// }

// await writeFile('./RandomFiles/f11.txt','f1')
// await writeFile('./RandomFiles/f22.txt','f2')
// await writeFile('./RandomFiles/f33.txt','f3')

// const newPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("resolved")},3000)
//     setTimeout(()=>{reject("rejected")},5000)
// })

// newPromise2.then((message)=>console.log(message));

/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

// console.log("Program started");
// const newPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Program complete")
//     },3000)
//     setTimeout(()=>{
//         reject("Program Failed")
//     },2000)
// })
// console.log(newPromise);
// console.log("Program in progress...");

// newPromise
// .then((msg)=>{
//     console.log(msg);
    
// })
// .catch((error)=>{
//     console.log(error)
// })

/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

// console.log("started")

// const newPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("step 1")
//     },3000)
// })

// console.log(newPromise);
// console.log("In progress");

// newPromise
// .then((msg)=>{console.log(msg);
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("step 2")
//         },3000)
//     })
// })
// .then((msg2)=>console.log(msg2)
// )



const {default:fs} = await import('fs/promises')




