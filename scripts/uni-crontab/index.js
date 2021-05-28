const axios = require('axios');
(async () => {
    let res = await axios.get(`https://74685ec4-fb0e-458f-a4a6-19264065d9f7.bspapp.com/http/helper?action=crontab-mint&appkey=` + process.env.APP_KEY);
    console.log(res);
})();