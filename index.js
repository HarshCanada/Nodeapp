const http = require("http");
const myServer=http.createServer((req,res)=>{
    console.log("New Request");
    res.end("Hello from Harsh Patel Server");
});

myServer.listen(8000,()=>console.log("Server Harsh Started"))