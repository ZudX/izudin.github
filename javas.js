const http = require("http");
const pickOption = require("./java");
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.write(pickOption)
    res.end();
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port,hostname()=>{
    console.log(server running at http://$(hostname):$(port)/);
});