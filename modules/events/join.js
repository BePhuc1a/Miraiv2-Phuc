module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.0",
	credits: "SpermLord",
	description: "Listen events",
	dependencies: ["request", "fs-extra"]
};

module.exports.run = async function({ api, event, global, client }) {
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, event.threadID, api.getCurrentUserID());
		const fs = require("fs");
		var msg = {
				body: "Đã kết nối thành công với bot của Phúc! Vui lòng sử dụng !help để xem tất cả các lệnh❤. Cảm ơn các bạn đã sử dụng bot😍",
				attachment: fs.createReadStream(__dirname + `/cache/cn/hello.gif`)
			}
			api.sendMessage(msg, event.threadID, event.messageID);
		}
	else {
		const { createReadStream, existsSync, mkdirSync } = require("fs-extra");
		let threadInfo = await api.getThreadInfo(event.threadID),
			threadName = threadInfo.threadName,
			settings = client.threadSetting.get(event.threadID) || {},
			dirGif = __dirname + `/cache/joinGif/`,
			msg, formPush;
		var mentions = [], nameArray = [], memLength = [];
		for (var i = 0; i < event.logMessageData.addedParticipants.length; i++) {
			let id = event.logMessageData.addedParticipants[i].userFbId;
			let userName = event.logMessageData.addedParticipants[i].fullName;
			nameArray.push(userName);
			mentions.push({ tag: userName, id });
			memLength.push(threadInfo.participantIDs.length - i);
		}
		memLength.sort((a, b) => a - b);

		(typeof settings.customJoin == "undefined") ? msg = "WELLCOME {name}.\nChào mừng đã đến với {threadName}.\n{type} là thành viên thứ {soThanhVien} của nhóm 🥳" : msg = settings.customJoin;
		msg = msg
		.replace(/\{name}/g, nameArray.join(', '))
		.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
		.replace(/\{soThanhVien}/g, memLength.join(', '))
		.replace(/\{threadName}/g, threadName);
		if (existsSync(dirGif)) mkdirSync(dirGif, { recursive: true });
		if (existsSync(dirGif + `chaomung.gif`)) formPush = { body: msg, attachment: createReadStream(dirGif + `chaomung.gif`), mentions }
		else formPush = { body: msg, mentions }
		return api.sendMessage(formPush, event.threadID);
	}
}