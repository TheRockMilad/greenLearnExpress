const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
    const readStream = fs.createReadStream("./other/file.txt")
    res.writeHead(200 , {"Content-Type":"text/plain"})
    readStream.pipe(res)
}).listen(3000,()=>{
    console.log("server is running on port 3000");
})