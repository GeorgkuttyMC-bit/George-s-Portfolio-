const https = require('https');
const ids = ["riJPuyovn-0", "O1Pn_sW7RHI", "FMuBnj2C-3Y", "1H3lhSo2cko", "LdnsecTwZkM", "ZmHaWGHaock"];

ids.forEach(id => {
  https.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        console.log(`${id}: ${json.title}`);
      } catch (e) {
        console.log(`${id}: Failed to parse`);
      }
    });
  });
});
