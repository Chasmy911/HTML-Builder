const fs = require('fs');
const path = require('path');

const textPath = path.resolve(__dirname, 'text.txt');

const readStream = fs.ReadStream(textPath, 'utf8');

readStream.on('data', (data) => {
  console.log(data);
});