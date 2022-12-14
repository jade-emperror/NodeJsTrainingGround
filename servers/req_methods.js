const  http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/json');
    if(req.method === 'GET'){
        res.end('Hello World');
    }
    else if(req.method === 'POST'){
        let body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            body = Buffer.concat(body).toString();
            body = JSON.parse(body);
            res.end(("hello "+body.name));
        })
    }
})
server.listen(3000);