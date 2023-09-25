const express = require("express");
const {getAllArtistController,createArtistController} = require('../Controller/artistController')
 
const Router = express.Router();


Router.get('/getAllArtist', getAllArtistController);
Router.post('/createArtist',createArtistController);
module.exports = Router;