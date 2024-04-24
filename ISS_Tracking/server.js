const http = require('http');
const https = require('https');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = 'http://api.open-notify.org/iss-now.json';
  https.get(url, apiResponse => {
    apiResponse.pipe(res);
  });
});

server.listen(port, hostname, () => {
  console.log(
    `Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`
  );
});
