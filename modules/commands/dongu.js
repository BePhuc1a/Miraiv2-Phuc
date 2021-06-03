const fs = require("fs");
module.exports.config = {
	name: "Đồ Ngu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đình Phúc", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Đồ Ngu",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đồ ngu")==0 || (event.body.indexOf("đồ ngu")==0)) {
		var msg = {
				body: "Vừa ngu vừa mất dậy cút mẹ mày đi!",
				attachment: fs.createReadStream(__dirname + `/noprefix/dongu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}