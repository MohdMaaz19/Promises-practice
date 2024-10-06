import path from 'path'
import fs from 'fs'

const inputFilePath = 'lipsum.txt'
const dirPath = './randomJsonDirectory'

fs.readFile(inputFilePath,'utf-8',(error,data)=>{
    if(error){
        console.log(error)
    }else{
        const uppercaseContent = data.toUpperCase()
        const lowerCaseContent = data.toLowerCase()

        const upperCaseFileName = 'uppercase.txt'
        const upperCasePath = path.join(dirPath,upperCaseFileName);
        const lowerCaseFileName = 'lowercase.txt'
        const lowerCasePath = path.join(dirPath,lowerCaseFileName);

        fs.writeFile(upperCasePath,uppercaseContent,(err)=>{
            if(error){
                console.log(err);
            }else{
                fs.writeFile(lowerCasePath,lowerCaseContent,(error)=>{
                    if(error){
                        console.log(error);
                    }else{
                    fs.readFile(lowerCasePath,'utf-8',(error,lowerCaseContent)=>{
                        if(error){
                            console.log(error)
                        }else{
                            const sentence = lowerCaseContent
                                             .match([/^!.?]+[!./]/g])
                                             .filter(Boolean)
                                             .map((sentence)=>sentence.trim())
                                             .join('\n');
                            const sortedSentences = sentence.split('\n').sort().join('\n')
                            const sortedFilePath = path.join(dirPath,'sortedSentences.txt')
                            fs.writeFile(sortedFilePath,sortedSentences,(error)=>{
                                if(error){
                                    console.log(error)
                                }
                            })

                        }
                    })      
                }
                });
            }
        })
        }
})