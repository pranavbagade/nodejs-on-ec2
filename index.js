
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('A Monk in Cloud');
}).listen(443); // HTTPS default port

console.log('Server running at https://localhost:443/');
