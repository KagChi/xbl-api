const request = require("axios");
const { author, version } = require("./package.json");

/* Functions and Types */

const baseURL = "https://xysebotlist.ga/api";
const byid = "/by-id?q=";

async function getBot(idBot) {
 if (typeof idBot !== "string") throw Error("Missing parameter idbot!");
 if (idBot.length != 18) throw Error("Invalid Bot ID");
 if (isNaN(idBot)) throw Error("Invalid ID");

 const result = await request.get(baseURL + byid + idBot).then(res => res);
 return result.data;
}

/* ********** */

/* Exporting */

module.exports = { author, version, getBot };
