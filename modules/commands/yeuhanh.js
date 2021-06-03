const fs = require("fs");
module.exports.config = {
	name: "Yêu Hạnh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đình Phúc", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Yêu Hạnh",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yêu Hạnh")==0 || (event.body.indexOf("yêu hạnh")==0)) {
		var msg = {
				body: "Đ.Phúc Yêu Hạnh ❤<Hạnh Phúc>🥰💏",
				attachment: fs.createReadStream(__dirname + `/noprefix/yeuhanh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}