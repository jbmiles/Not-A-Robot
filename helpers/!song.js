var fs = require("fs");

sendSong = function (channel) {
	var obj =  JSON.parse(fs.readFileSync('data.json', 'utf8'))['songObject'];
	var song = obj[Math.floor(Math.random()*obj.length)]
	channel.sendMessage(song)
	.then(message => console.log(`Sent message: ${message.content}`))
	.catch(console.error);
}

module.exports = sendSong;
