const express = require("express");
const {getAllUser,registerUser,loginUser} = require("../Controller/userController")
const router = express.Router();

router.get('/getAll', getAllUser)

router.post('/register', registerUser);

router.post('/login', loginUser);
module.exports =  router;