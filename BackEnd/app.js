const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const userRoutes = require('./Routes/userRoute');
const songRoutes = require('./Routes/songsRoutes')
const artistRoutes = require('./Routes/artistRoutes');
connectDB();
let app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.get('', (req, res) => {
    res.status(200).send(
        {
            "message": "ok"
        }
    )
})

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/song', songRoutes);
app.use('/api/v1/artist', artistRoutes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on ${process.env.DEV_MODE} mode port no. is ${PORT}`);
})