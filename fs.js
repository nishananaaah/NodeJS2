var fs = require('fs')

// //READ FILE
fs.readFile("./newText0","utf-8",function(err,data){
    if(err){
        console.log(err)
    }
    console.log(data)
})

// //CREATE  FILES
fs.writeFile("niyas.txt","he is my love",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file created")
})

// //UPDATE FILE
fs.appendFile("./nishana.txt","hi nishana",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file created")
})

// //RENAME FILE 
fs.rename("./nishana.txt","shana.txt",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file renamed")
})

//DELETE FILE
fs.unlink("./shana.txt",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file deleted")
})