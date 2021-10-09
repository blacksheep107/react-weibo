const http = require('http');
const Mock = require('mockjs')
const _map = require('./interfaceMap')

http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        'Cache-Control': 'no-cache,no-store', // clear cache
    })
    console.log(req.method);
    res.end('1')
    if (req.method === 'POST') {
        let postData = ''
        req.addListener('data', dataBuffer => postData += dataBuffer)
        req.addListener('end', () => {
            console.log('url=>', req.url)
            postData = JSON.parse(postData)
            const originData = _map[req.url]
                ? Mock.mock(_map[req.url])
                : ''
            // const data = typeof (_filter[req.url]) === 'function'
            //     ? _filter[req.url](originData, postData)
            //     : originData
            const data = originData
            setTimeout(() => {
                res.end(JSON.stringify(data))
            }, parseInt(((Math.random() - 0.5) + 1) * 500, 10)) // 随机数
        })
    }
}).listen(8009)
console.log('Mock: listening port 8009')
