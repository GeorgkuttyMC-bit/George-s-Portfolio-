const https = require('https');
const ids = ["riJPuyovn-0", "O1Pn_sW7RHI", "FMuBnj2C-3Y", "1H3lhSo2cko", "LdnsecTwZkM", "ZmHaWGHaock"];

ids.forEach(id => {
  https.get(`https://www.youtube.com/shorts/${id}`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<title>(.*?)<\/title>/);
      console.log(`${id}: ${match ? match[1].replace(' - YouTube', '') : 'Unknown'}`);
    });
  });
});
