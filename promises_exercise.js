// const { default: fs } = await import("fs/promises");
// import { join } from 'path';

// function createAndDeleteFiles() {
//   const dirPath = './randomJSONFiles';
//   const fileNames = ['file1.json', 'file2.json', 'file3.json']; // Example file names

//   // Step 1: Create directory (if not already exists)
//   fs.mkdir(dirPath, { recursive: true })
//     .then(() => {
//       console.log('Directory created:', dirPath);

//       // Step 2: Create random JSON files
//       const createFilesPromises = fileNames.map((fileName) => {
//         const filePath = join(dirPath, fileName);
//         const randomData = { number: Math.floor(Math.random() * 100) }; // Random JSON data
//         return fs.writeFile(filePath, JSON.stringify(randomData, null, 2));
//       });

//       // Return promise for all file creations
//       return Promise.all(createFilesPromises);
//     })
//     .then(() => {
//       console.log('Files created successfully.');

//       // Step 3: Read the directory to get list of files
//       return fs.readdir(dirPath);
//     })
//     .then((filesInDirectory) => {
//       // Step 4: Delete all files in the directory
//       const deleteFilesPromises = filesInDirectory.map((file) => {
//         const filePath = join(dirPath, file);
//         return fs.unlink(filePath);
//       });

//       // Return promise for all file deletions
//       return Promise.all(deleteFilesPromises);
//     })
//     .then(() => {
//       console.log('All files deleted successfully.');
//     })
//     .catch((error) => {
//       console.error('Error occurred:', error);
//     });
// }

// // Execute the function
// createAndDeleteFiles();

const {default:fs} = await import('fs/promises');
import { randomBytes } from 'crypto';
import { readdir } from 'fs';
import {join} from 'path';

function createAndDeleteFiles(){

    const dirPath = './randomBytes';
    const fileNames = ['file1.json','file2.json','file3.json']
    
    fs.mkdir(dirPath,{recursive:true})
    .then(()=>{
        console.log("Directory created");

        const createFilePromises = fileNames.map((file)=>{
            const filePath = join(dirPath,file);
            const randomData = `This is the data for file ${file}`;
            return fs.writeFile(filePath,JSON.stringify(randomData),null,2)
        })
        return Promise.all(createFilePromises);
    })
    .then(()=>{
        console.log("All files created")
        return fs.readdir(dirPath)
    })
    .then((files)=>{
        const deleteFilesPromises = files.map((file)=>{
            const filePath = join(dirPath,file)
            return fs.unlink(filePath)
        })
        return Promise.all(deleteFilesPromises);
    })
    .then(()=>{
        console.log("all filed deleted")
    })
    .then(()=>{
        return fs.rmdir(dirPath)
    })
    .catch((error)=>{
        console.error(error)
    })
    
}

createAndDeleteFiles();