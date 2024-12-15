// const http =require('http');
// const url =require('url')
// const server=http.createServer((req,res)=>{
//      const rUrl =url.parse(req.url,true).pathname//routing
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
const http =require('http');
const url =require('url')
const server =http.createServer((req,res)=>{
 const rUrl =url.parse(req.url,true).pathname
 if(rUrl=='/'){
    res.write("home")
    res.end()
 }else if(rUrl=="/about"){
    res.write("about")
    res.end()
 }else if(rUrl=="/contact"){
    res.write("contact")
    res.end()
 }else{
    res.write("the page is not found")
    res.end()
 }
})
server.listen(8080)