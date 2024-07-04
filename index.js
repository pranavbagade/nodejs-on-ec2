const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync('/root/server.key'),
  cert: fs.readFileSync('/root/server.cert'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello World!');
}).listen(443); // HTTPS default port

console.log('Server running at https://your-domain.com/');

