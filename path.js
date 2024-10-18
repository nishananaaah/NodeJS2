var path =require('path')
const p ="/home/tutorial/nodejs/sample.txt"
// console.log(path.basename(p));//for last part
// console.log(path.dirname(p));//for folder directory
// console.log(path.extname(p));//for extension
// console.log(path.join('/home','js','tutorial','index.js'));// for join the path
console.log(path.parse(p));//returns a object details about the path