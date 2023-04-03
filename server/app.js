const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: '.env'});

const app = express();

app.use(cors({origin: true}));

app.get("/", (req, res) => {
    return res.json("Hi there....")
});

// user authentication route
const userRoute = require('./routes/auth');

//send the user to auth.js if the path is /api/users
app.use("/api/users/", userRoute);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
mongoose.connection
.once("open", () => console.log("Connected"))
.on("error", (error) => console.log(`ERROR : ${error}`));

app.listen(process.env.PORT, () => console.log(`Listening to port: ${process.env.PORT}`));
