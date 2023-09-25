const mongoose = require("mongoose");


const songSchema = new mongoose.Schema({
    songname: {
        type: String,
        require: [true, 'songname is require']
    },
    dateRelease: {
        type: Date,
        require: [true, 'date is require']
    },
    image: {
        type: String,
        require: [true, 'image is require']
    },
    rating :{
        type:Number,
        require:[true, 'rating is require']
    },
    artistname: {
        type: mongoose.Types.ObjectId,
        ref: 'artist',
    }
},
    { timestamps: true });

const songsModel = mongoose.model("songs", songSchema);
module.exports = songsModel;