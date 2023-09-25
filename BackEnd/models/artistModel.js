let mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    artistname: {
        type: String,
        require: [true, "artistname is require"]
    },
    dateOfBirth: {
        type: Date,
        require: [true, 'artist date of birth is require']
    },
    bio: {
        type: String,
        require: [true, 'bio is require']
    },
    songs:
        {
            type:mongoose.Types.ObjectId,
            ref:'songs',
        }
    
});

const artistModel = mongoose.model("artist", artistSchema);
module.exports = artistModel;