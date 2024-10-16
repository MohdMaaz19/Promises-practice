import path from 'path'
import fs from 'fs'
const dirPath = './randomJsonDirectory'

fs.mkdir(dirPath,{recursive:true},(error)=>{
    if(error){
        console.log(error);
        return;
    }else{
        console.log("Directory created");
        let count=0;
        for(let i=1; i<=5;i++){
            const filePath = path.join(dirPath,`file${i}.json`);
            const fileContent = `Data for the file`;
            fs.writeFile(filePath,JSON.stringify(fileContent),(error)=>{
                if(error){
                    console.log(error);
                    return;
                }
                count++;
                if(count==5){
                    for(let i=1; i<6;i++){
                        const fileName = `file${i}.json`;
                        const filePath = path.join(dirPath,fileName);
                        fs.unlink(filePath,(error)=>{
                            if(error){
                                console.log(error);
                                return;
                            }
                        })
                    }
                }
            })
        }
        

    }

})