const fs = require("fs");
module.exports.config = {
	name: "Hoang mang",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Hoang mang",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hoang mang")==0 || (event.body.indexOf("hoang mang")==0)) {
		var msg = {
				body: "Cái lồn què zì zậy🙄???",
				attachment: fs.createReadStream(__dirname + `/noprefix/chamhoi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}