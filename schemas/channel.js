const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  guildID: String,
  channels: [String],
  blacklist: [String],
  messages: Schema.Types.Mixed,
  textQuiz: Schema.Types.Mixed,
  linkQuiz: Schema.Types.Mixed,
  refreshRate: Number,
  lastRefresh: Schema.Types.Mixed
});
