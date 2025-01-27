const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  socialMediaHandles: [
    {
      platform: String, 
      handle: String,
      link: String, 
    },
  ],
  images: [String],
});

module.exports = mongoose.model('User', userSchema);