const express = require("express");
const artistModel = require('../models/artistModel')

exports.getAllArtistController = async (req, res) => {
    try {
        const artist = await artistModel.find({});
        return res.status(200).send({
            "message": "all artist releted data get in.",
            artist
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            "message": "artist data get in error",
            error
        })
    }
}

exports.createArtistController = async (req, res) => {
    try {
        const { artistname, dateOfBirth, bio } = req.body;
        if (!artistname || !dateOfBirth || !bio) {
            return res.status(401).send({
                "message": "all fiels are mandotary to filled",
            })
        }
        const artist = new artistModel({ artistname, dateOfBirth, bio });
        await artist.save();
        return res.status(200).send({
            "meassage": "data saved successfully",
            artist
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            "message": "getting error",
            error
        })
    }
}