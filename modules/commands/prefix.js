const fs = require("fs");
module.exports.config = {
name: "prefix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "prefix",
	commandCategory: "NoCầnPrefix",
	usages: "prefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, args, Users, Threads, global, Currencies, client }) {
	var { threadID, messageID } = event;
	const threadSetting = client.threadSetting.get(event.threadID.toString()) || {};
	if (event.body.indexOf("Prefix")==0 || (event.body.indexOf("prefix")==0)) {
		var msg = {
				body: `Hiện tại prefix của bot là: ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} \nCó vậy cx éo bít😈`,
				attachment: fs.createReadStream(__dirname + `/noprefix/fuck.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}