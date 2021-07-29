import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('hello world Home');
  } else if (req.url === '/a') {
    res.end('Hello A');
  } else if (req.url === '/b') {
    res.end('Hello B');
  } else if ((req.url === '/c') & (req.method === 'POST')) {
    console.log('route c');
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const params = Buffer.concat(body);
      console.log('body', params.toString());
      res.end(`You submitted these parameters, ${params.toString()}`);
    });
  } else {
    res.end('Good Bye');
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
