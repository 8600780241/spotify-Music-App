const songsModel = require("../models/songModel");
const artistModel = require('../models/artistModel');
const mongoose = require("mongoose");
exports.getAllControllerSong = async (req, res) => {
    try {
        const songs = await songsModel.find({});
        return res.status(200).send({
            "message": "all songs releted data get in.",
            songs
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            "message": "songs get in error",
            error
        })
    }
}

exports.createSongController = async (req, res) => {
    try {
        const { songname, dateRelease, image, artistname, rating } = req.body;
        if (!songname || !dateRelease || !image || !rating) {
            console.log("all fields are empty");
            return res.status(401).send({
                "message": "All fields are mandatory to filled",
            });
        }
        const existingArtist = await artistModel.findById(artistname);
        if (!existingArtist) {
            // return res.status(401).send({
            //     "message": "unable to find artist"
            // }
            // )
            const songwithoutartist = new songsModel({ songname, dateRelease, image, rating });
            await songwithoutartist.save();
            return res.status(200).send({
                "message": " successfully added songs",
                songwithoutartist
            })
        }
        const song = new songsModel({ songname, dateRelease, image, rating, artistname });
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await song.save({ session });
        // existingArtist.songs.push(song);
        // await existingArtist.save({ session });
        // await session.commitTransaction();
        await song.save();
        return res.status(200).send({
            "message": " successfully added everything",
            song
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            "message": "getting error while saving songs data",
            error
        })
    }
}

exports.artistsongController = async (req, res) => {
    try {
        const artistsong = await artistModel.findById(req.params.id);
        if (!artistsong) {
            return res.status(404).send({
                "message": "artist not found with this id",
                error
            })
        }
        return res.status(200).send({
            "message": "sucessfull",
            artistsong
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            "message": "error in artist song",
            error
        })
    }
}
