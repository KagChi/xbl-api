const request = require("node-superfetch");
const { author, version } = require("./package.json");
async function botData(idBot) {
if (!idBot) throw Error('Enter Bot Id');
const {body: data} = await request.get("https://xysebotlist.ga/api/by-id?q=" + idBot)
return data;
}

module.exports = {
   botData,
   author,
   version
}
