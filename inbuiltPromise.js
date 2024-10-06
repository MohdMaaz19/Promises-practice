const {default:fs} = await import('fs/promises');
import path from 'path'

const dirPath = './RandomFiles'
const inputFilePath = './lipsum.txt'

const fileNames = ['file1.json', 'file2.json', 'file3.json'];

fs.mkdir(dirPath, {recursive:true})
.then(()=>{
    return fs.writeFile(fileNames[0],JSON.stringify(`${fileNames[0]}`))
})
.then(()=>{
    return fs.writeFile(fileNames[1],JSON.stringify('abc'))
})
.then(()=>{
    return fs.writeFile(fileNames[2],JSON.stringify('content'))
})