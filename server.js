const http =require('http')
const url=require('url')
// create server
// const server=http.createServer(
//     (req,res)=>{
//         res.write("Hello from server")
//         res.end()
//     })
//     server.listen(8080)
// const server=http.createServer((req,res)=>{
//     const rUrl =url.parse(req.url,true).pathname//routing
//     if(rUrl =='/'){
//         res.write("Home Page");
//         res.end()
//      }else if(rUrl=='/about'){
//         res.write("About Page");
//         res.end()
//      }else if(rUrl=='/contact'){
//         res.write("Contact Page");
//         res.end()
//      }
// })
// server.listen(8080);