const https = require('https');
const zlib = require('zlib');

exports.handler = async (event) => {
  console.log('Incoming request:', event);

  return new Promise((resolve, reject) => {
    const targetPath = event.path.replace(/^\/api/, '');
    const targetUrl = `https://percient-interview-apis.onrender.com${targetPath}`;
    console.log('Target URL:', targetUrl);

    const options = {
      method: event.httpMethod,
      headers: {
        ...event.headers,
        host: 'percient-interview-apis.onrender.com',
        'accept-encoding': 'identity', // Disable compression
      },
    };

    const req = https.request(targetUrl, options, (res) => {
      let body = [];
      res.on('data', (chunk) => {
        body.push(chunk);
      });

      res.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('Response body:', body);

        resolve({
          statusCode: res.statusCode,
          headers: {
            ...res.headers,
            'Access-Control-Allow-Origin': '*', // Add CORS headers
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
          body,
        });
      });
    });

    req.on('error', (error) => {
      console.error('Request error:', error);
      reject({
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      });
    });

    if (event.body) {
      console.log('Forwarding request body:', event.body);
      req.write(event.body);
    }

    req.end();
  });
};
