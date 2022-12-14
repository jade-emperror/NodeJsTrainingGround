const http = require('http');
http.createServer(function (req, res) {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
        <html>
            <head>
                <title>First Assignment</title>
            </head>
            <body>
            <h1>Greetings!</h1>
            <form method="post" action="create-user">
                <input type="text" name="username" placeholder="username">
                <input type=submit value="submit">
            </form>
        </html>
        `);
        res.end();
    }else if (req.url === '/users') {
        res.writeHead(200, {'Content-Type': 'application/html'});
        res.write('<li>John</li>');
        res.write('<li>Mike</li>');
        res.write('<li>Adam</li>');
        res.end();
    }else if(req.url === '/create-user') {
        if (req.method === 'POST') {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                let value = parsedBody.split('=')[1];
                console.log(value);
                res.end(value);
            });
        } else {
            res.end("only post method is allowed");
        }
    }else {
        res.end("404 not found");
    }
}).listen(3000);