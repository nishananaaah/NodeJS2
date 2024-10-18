const si = setInterval(function(){
    console.log('Node js')
},1000);
  const st =setTimeout(()=>{
    clearInterval(si)
},4000)
// it is reach to 4 second to stop[ the  function]

clearTimeout(st)
// to stop the setTimeout

// setTimeout(function(){
//     console.log("Node")
// },1000)