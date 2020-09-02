const axios = require("axios");
async function botData(idBot) {
if (!idBot) throw Error('Enter Bot Id');
   const data = await axios.get('https://xysebotlist.ga/api/by-id?q=' + idBot).then(res => res)
   return data;
}

module.exports.botData = botData;
module.exports.version = "0.0.2";
