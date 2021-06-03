const fs = require("fs");
module.exports.config = {
name: "hi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "hi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hi")==0 || (event.body.indexOf("Hi")==0) || (event.body.indexOf("Hello")==0) || (event.body.indexOf("hi")==0) ||
(event.body.indexOf("Lô")==0) ||
(event.body.indexOf("hello")==0) ||
(event.body.indexOf("Alo")==0) ||
(event.body.indexOf("alo")==0) ||
(event.body.indexOf("lô")==0)) {
  var msg = {
    body: "chào vợ! chúc em một ngày mới tốt lành", 
  }
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}