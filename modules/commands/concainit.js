const fs = require("fs");
module.exports.config = {
name: "còn cái nịt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "còn cái nịt",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("còn cái nịt")==0 || (event.body.indexOf("Còn cái nịt")==0)) {
		var msg = {
				body: "Còn đúng cái nịt thôi",
				attachment: fs.createReadStream(__dirname + `/noprefix/concainit.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}