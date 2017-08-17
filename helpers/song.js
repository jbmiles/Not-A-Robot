function sendSong(channel, obj) {
  const song = obj[Math.floor(Math.random() * obj.length)];
  channel.send(song)
    .then(message => console.log(`Sent message: ${message.content}`))
    .catch(console.error);
}

module.exports = sendSong;