const fs = require("fs");
module.exports.config = {
	name: "Ông đa nói giúp",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "ông đa",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ông đa ơi")==0 || (event.body.indexOf("Ông đa ơi")==0)) {
		var msg = {
				body: "Ông đây , Ông đây ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ongdadz.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}