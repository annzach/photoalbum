const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageurl:{type:String,required:true},
  timestamp:{type:Date,  default: Date.now },
  albumkey:{type:mongoose.Schema.Types.ObjectId, ref: 'Album'}
});

const Image = mongoose.model('Image',imageSchema);
module.exports = Image;