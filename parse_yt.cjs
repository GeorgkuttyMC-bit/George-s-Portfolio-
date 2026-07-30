const fs = require('fs');
const https = require('https');

https.get('https://www.youtube.com/@georgescreativestudio/shorts', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        const match = data.match(/var ytInitialData = (\{.*?\});/);
        if (match) {
            const json = JSON.parse(match[1]);
            const tabs = json.contents.twoColumnBrowseResultsRenderer.tabs;
            const shortsTab = tabs.find(t => t.tabRenderer && t.tabRenderer.title === 'Shorts');
            if (shortsTab) {
                const items = shortsTab.tabRenderer.content.richGridRenderer.contents;
                items.forEach(item => {
                    if (item.richItemRenderer && item.richItemRenderer.content.shortsLockupViewModel) {
                        const vm = item.richItemRenderer.content.shortsLockupViewModel;
                        console.log(vm.entityId, "-", vm.overlayMetadata.primaryText.content);
                    }
                });
            }
        }
    });
});
