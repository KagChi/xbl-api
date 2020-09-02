const axios = require("axios");
async function botData(idBot) {
if (!idBot) throw Error('Enter Bot Id');
   
await axios.get('https://xysebotlist.ga/api/by-id?q=' + idBot)
}

module.exports.botData = botData;
module.exports.version = "0.0.1";
