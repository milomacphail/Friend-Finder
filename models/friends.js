const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create friend schema
const FriendSchema = new Schema ({
    name: {
        type: String,
        required: [true, "name field is required"]
    },
    job: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
//add in geolocation

    
});

const Friend = mongoose.model("friend", FriendSchema);

module.exports = Friend;