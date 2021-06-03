const fs = require("fs");
module.exports.config = {
name: "ảo thật đấy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ảo thật đấy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ảo thật đấy")==0 || (event.body.indexOf("Ảo thật đấy")==0)) {
		var msg = {
				body: "Đitmemay ảo thật đấy",
				attachment: fs.createReadStream(__dirname + `/noprefix/ảo thật đấy.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}