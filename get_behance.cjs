const https = require('https');
https.get('https://www.behance.net/gallery/98981099/NEXT-TECHNOLOGYS', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="(.*?)"/);
    console.log("Image: " + (match ? match[1] : 'Not found'));
  });
});
