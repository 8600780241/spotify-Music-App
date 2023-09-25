const express = require("express");
const {getAllControllerSong, createSongController,artistsongController } = require('../Controller/songController')
const Router = express.Router();

Router.get('/getAllSong', getAllControllerSong);

Router.post('/createSong', createSongController);

//Router.put('/updateSong', updateSongController);
Router.get('/artistSong/:id',artistsongController);
module.exports = Router;