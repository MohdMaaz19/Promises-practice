const array = ['I','am','trying']
let finalString = ""
// function concatString(callback,index){
//     setTimeout(()=>{
//         const string= array[index];
//         callback(string);
//         console.log(finalString);
//     },1000)
// }
// for(let i=0; i<array.length;i++){
//     concatString((string)=>{
//         finalString= finalString+string+" "
//     },i)
// }

// // Function to process each promise sequentially
// function processString(index) {
//     if (index < array.length) {
//         stringPromise(index).then((string) => {
//             finalString += string; // Concatenate string
//             processString(index + 1); // Call the next promise
//         });
//     } else {
//         console.log(finalString); // Log the result after all promises are done
//     }
// }

// // Start processing from the first element
// processString(0);

function stringPromise(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const string = array[index];
            resolve(string);
        }, 1000); // 1-second delay
    });
}

// Sequentially process promises using a loop with delay
function processStrings() {
    let promise = Promise.resolve(); // Start with a resolved promise

    for (let i = 0; i < array.length; i++) {
        promise = promise.then(() => stringPromise(i))
            .then((string) => {
                finalString =finalString+string+" "; // Concatenate string to finalString
                console.log(finalString); // Log the current state of finalString after each step
            });
    }
}

processStrings();
