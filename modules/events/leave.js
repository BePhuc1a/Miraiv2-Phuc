module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "SpermLord",
	description: "Listen events"
};

module.exports.run = async function({ api, event, Users, Threads, client }) {
	let msg, formPush
	const { createReadStream, existsSync, mkdirSync } = require("fs-extra");
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	let settings = client.threadSetting.get(event.threadID) || {};
	let name = (await Users.getData(event.logMessageData.leftParticipantFbId)).name || (await api.getUserInfo(event.logMessageData.leftParticipantFbId))[event.logMessageData.leftParticipantFbId].name
	let type = (event.author == event.logMessageData.leftParticipantFbId) ? "Nứng Cặc và tự giác rời" : "Quá bố láo và đã bị quản trị viên cho cút ra";
	(typeof settings.customLeave == "undefined") ? msg = "{name} Đã {type} khỏi nhóm. Hẹn em kiếp sau🖕😢" : msg = settings.customLeave;
	msg = msg
	.replace(/\{name}/g, name)
	.replace(/\{type}/g, type);
	let dirGif = __dirname + `/cache/leaveGif/`;
	if (existsSync(dirGif)) mkdirSync(dirGif, { recursive: true })
	if (existsSync(dirGif + `cutra.gif`)) formPush = { body: msg, attachment: createReadStream(dirGif + `cutra.gif`) }
	else formPush = { body: msg }
	return api.sendMessage(formPush, event.threadID);
}