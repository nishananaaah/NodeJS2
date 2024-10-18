//OS MODULE
// const { log } = require('console')
// var os =require('os')

//OS details
// console.log(os.type())
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.version())
// console.log(os.uptime())
// console.log(os.userInfo())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.cpus())
// console.log(os.networkInterfaces())

//FILE SYSTEM MODULE
var fs = require('fs')

//Read File
// fs.readFile('./text.txt','utf-8',function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

//Create File
// fs.writeFile('new text','created a new file by nodejs', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file created')
//     }
// )
//if the file name has already in the code updated this appendfile
// fs.appendFile('new1 text','created a new file by nodejs \n', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file created')
// }
// )

//Rename Files
// fs.rename("./text.txt", "./sample.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('File Renamed')
// });

//Delete Files
fs.unlink('./new text',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('file deleted')
})