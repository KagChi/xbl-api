const request = require("node-superfetch");
const { author, version } = require("./package.json");

/* Functions and Types */

const baseURL = "https://xysebotlist.ga/api";
const byid = "/by-id?q=";

async function getBot(idBot) {
 if (typeof idBot !== "string") throw Error("Missing parameter idbot!");
 if (idBot.length != 18) throw Error("Invalid Bot ID");
 if (isNaN(idBot)) throw Error("Invalid ID");

 const { body: result } = await request.get(baseURL + byid + parseInt(idBot));
 if (result.status == 404) throw error("Bot didn't found in database");
 return result;
}

/* ********** */

/* Exporting */

module.exports = { author, version, getBot };
