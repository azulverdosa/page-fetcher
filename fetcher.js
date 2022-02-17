const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3] || "./index.html";

request(url, (error, response, body) => {
  error && console.log('error:', error); // Print the error if one occurred
  response && console.log('statusCode:', response.statusCode); // Print the response status code if a response was received

  fs.writeFile(filePath, body, (error) => {
    console.log(error || `Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});