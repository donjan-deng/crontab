const axios = require('axios');
(async () => {
    let res = await axios.get(`https://74685ec4-fb0e-458f-a4a6-19264065d9f7.bspapp.com/http/helper`, {
        params: {
            action: 'action=crontab-mint',
            appkey: process.env.APP_KEY
        },
        timeout: 1000 * 60
    });
    console.log(res);
})();