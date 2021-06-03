module.exports.config = {
	name: "lich", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0/1/2, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "BerVer", // Công nhận module sở hữu là ai
	description: "Kiểm ra lịch", // Thông tin chi tiết về lệnh
	commandCategory: "group", // Thuộc vào nhóm nào
	usages: "lich", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: ["amlich","node-fetch"], //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	// Info là phần chi tiết thêm của cách sử dụng lệnh
	// Key: Từ khoá thuộc trong usages
	// prompt: Chi tiết dữ liệu đầu vào của key
	// type: Định dạng dữ liệu đầu vào của key
	// example: Ví dụ ¯\_(ツ)_/¯ 

	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};

module.exports.run = async({ api, event, args, client, __GLOBAL }) =>{
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯
    const fetch = require("node-fetch");
    const axios = require('axios');
     const request = require('request');
const fs = require("fs");
    var fetchcd = await fetch("https://raw.githubusercontent.com/HerokeyVN/API_Ca_Dao/main/CaDao.js")
    var jsoncd =  await fetchcd.json()
var d = new Date();
var dd = d.getDate()-1
var yyyy = d.getFullYear()
var mm = d.getMonth()+1
var zone = 0 
var h = d.getHours()
var m = d.getMinutes()
var s = d.getSeconds()
var ms = d.getMilliseconds()
// thứ ngày
var day = d.getDay()
if (day == 0) {day = "Chủ nhật"}
if (day == 1) {day = "Thứ hai"}
if (day == 2) {day = "Thứ ba"}
if (day == 3) {day = "Thứ tư"}
if (day == 4) {day = "Thứ Năm"}
if (day == 5) {day = "Thứ sáu"}
if (day == 6) {day = "Thứ bảy"}
const amlich = require('amlich')//module
var rd = amlich.convertSolar2Lunar(dd,mm,yyyy,zone)
return api.sendMessage(`Dương lịch: ${dd+1}/${mm}/${yyyy} (${day})\n`
                      +`Âm lịch: ${rd[0]}/${rd[1]}/${rd[2]}\n`
                      +`Thời gian: ${h}:${m}:${s}:${ms}`
                      +`\n`
                      +`Canh ngôn:\n`
                      +`"${jsoncd.data[String(Math.floor(Math.random() * 268) + 1)]}"` , event.threadID, event.messageID)
axios.get('http://nqvapi.ml/lebong2005.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        var callback = () =>
                                api.sendMessage(
                                       
                                        event.threadID,
                                        () => fs.unlinkSync(__dirname + `/cache/2.jpg.${ext}`),
                                        event.messageID
                                );
                 return request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/2.jpg.${ext}`)).on("close", callback);
});
}