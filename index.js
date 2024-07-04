const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('A Monk in Cloud over HTTPS\n');
}).listen(443);

console.log('Server running at https://localhost:443/');
