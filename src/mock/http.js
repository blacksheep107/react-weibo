const http = require('http');
const Mock = require('mockjs')
http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': req.headers.origin,
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        'Cache-Control': 'no-cache,no-store', // clear cache
    })
    console.log(req, res);
}).listen(8009)
console.log('Mock: listening port 8009')
