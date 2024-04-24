const http = require('http');
const https = require('https');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const options = {
    hostname: 'api.open-notify.org', // Domain of the Open Notify API
    port: 80, // HTTP port (since the API doesn't have HTTPS)
    path: '/iss-now.json',
    method: 'GET',
  };

  const proxyRequest = https.request(options, apiResponse => {
    apiResponse.pipe(res); // Forward the response
  });

  req.pipe(proxyRequest); // Forward the original request to the proxy

  proxyRequest.on('error', e => {
    console.error(`Problem with proxy request: ${e.message}`);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
