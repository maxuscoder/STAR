const http = require('http');
const https = require('https');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const options = {
    hostname: 'api.open-notify.org',
    port: 80,
    path: '/iss-now.json',
    method: 'GET',
  };

  const proxyRequest = https.request(options, apiResponse => {
    apiResponse.pipe(res);
  });

  req.pipe(proxyRequest);

  proxyRequest.on('error', e => {
    console.error(`Problem with proxy request: ${e.message}`);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(
    `Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`
  );
});
