// import * as fs from "fs/promises";
// import path from "path";

// function fileModification() {
//     const inputFilePath = './lipsum.txt';
//     const lowerFile = 'lowercase_sentences.txt';

//     // Step 1: Read the given file `lipsum.txt`
//     return fs.readFile(inputFilePath, 'utf8')
//         .then((content) => {
//             // Convert the content to uppercase and write it to a new file
//             const upperContent = content.toUpperCase();
//             const upperFile = 'uppercase_lipsum.txt';
            
//             // Writing the uppercase content to a file
//             return fs.writeFile(upperFile, upperContent)
//                 .then(() => fs.appendFile('./filenames.txt', upperFile + '\n'))
//                 .then(() => upperContent);  // Pass on the uppercase content
//         })
//         .then((upperContent) => {
//             // Convert the uppercase content to lowercase
//             const lowerContent = upperContent.toLowerCase();
            
//             // Split sentences using your approach with match() and the regex to capture sentences ending in . ! ?
//             const sentences = lowerContent.match(/[^.!?]+[.!?]/g)
//                 .filter(Boolean) // Remove any null or undefined matches
//                 .map(sentence => sentence.trim()) // Trim whitespace from each sentence
//                 .join('\n'); // Join sentences with newline
            
//             // Write the lowercase sentences to a new file
//             return fs.writeFile(lowerFile, sentences)
//                 .then(() => fs.appendFile('./filenames.txt', lowerFile + '\n'));
//         })
//         .then(() => {
//             // Step 2: Now only read `lowercase_sentences.txt`, sort it, and write the result to `sorted_content.txt`
//             return fs.readFile(lowerFile, 'utf8');
//         })
//         .then((lowerContent) => {
//             // Sort the content of `lowercase_sentences.txt`
//             const sortedContent = lowerContent.split('\n').sort().join('\n');
//             const sortedFile = 'sorted_content.txt';
            
//             // Write the sorted content to sorted_content.txt and append the filename to filenames.txt
//             return fs.writeFile(sortedFile, sortedContent)
//                 .then(() => fs.appendFile('./filenames.txt', sortedFile + '\n'));
//         })
//         .then(() => {
//             // Step 3: Read `filenames.txt` and delete all files listed in it
//             return fs.readFile('./filenames.txt', 'utf8');
//         })
//         return;

        // .then((files)=>{
        //     const filesToDelete = files.split('\n').filter(Boolean)
        //     const deleteFilePromise = filesToDelete.map((file)=>{
        //         fs.unlink(file)
        //     })
        //     return Promise.all(deleteFilePromise)
        // })
//         // .then(() => {
//         //     console.log('All operations completed successfully.');
//         // })
//         // .catch((error) => {
//         //     console.error('Error:', error);
//         // });
// }

// // Run the function to perform file operations
// fileModification();

const {default : fs} = await import ('fs/promises');
import { error } from 'console';
import path from 'path';

const inputFilePath = './lipsum.txt';
const dirPath = './RandomFiles'

function fileModification(){
    fs.readFile(inputFilePath,'utf-8')
    .then((content)=>{

        const uppercaseContent = content.toUpperCase();
        const upperCaseFileName = 'uppercase.txt'
        const upperCaseFilePath = path.join(dirPath,upperCaseFileName)

        return fs.writeFile(upperCaseFilePath,uppercaseContent)
        .then(()=>({content,upperCaseFileName}))
    })
    .then(({content,upperCaseFileName})=>{
        console.log(content,upperCaseFileName)
    })

}
fileModification()