const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema = new Schema({
   type: {
       type: String,
       default: "Point"
   },
   coordinates: {
       type: [Number],
       index: "2dsphere"
   }
});


//create friend schema
const FriendSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    job: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Friend = mongoose.model("friend", FriendSchema);

module.exports = Friend;