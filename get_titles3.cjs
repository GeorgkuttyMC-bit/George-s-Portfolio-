const https = require('https');
https.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=WYOQ5JjPIHI&format=json`, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log(json.title);
    } catch (e) {
      console.log(`Failed to parse`);
    }
  });
});
