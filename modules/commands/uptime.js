module.exports.config = {
        name: "uptime",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "VanHung",
        description: "Kiểm tra thời gian bot đã online",
        commandCategory: "System",
        usages: "uptime",
        cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
        const axios = require('axios');
let time = process.uptime();
        const request = require('request');
const fs = require("fs");

        let hours = Math.floor(time / (60 * 60));
        let minutes = Math.floor((time % (60 * 60)) / 60);
        let seconds = Math.floor(time % 60);
        axios.get('http://nqvapi.ml/lebong2005.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        var callback = () =>
                                api.sendMessage(
                                        {
                                                body: `Bot của Nguyễn Đình Phúc đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây.`,
                                                attachment: fs.createReadStream(__dirname + `/cache/2.jpg.${ext}`)
                                        },
                                        event.threadID,
                                        () => fs.unlinkSync(__dirname + `/cache/2.jpg.${ext}`),
                                        event.messageID
                                );
                 return request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/2.jpg.${ext}`)).on("close", callback);
});
}