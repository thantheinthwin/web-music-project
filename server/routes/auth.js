const router = require('express').Router();

const user = require("../models/user");
const admin = require('../config/firebase.config');

router.get("/login", async (req, res) => {
    if(!req.headers.authorization){
        return res.status(500).send({message : "Invalid Token"});
    }

    const token = req.headers.authorization.split(" ")[1];
    try{
        // Decoding the token
        const decodeValue = await admin.auth().verifyIdToken(token);

        if(!decodeValue){
            return res.status(505).json({message: "Unauthorized"});
        }
        else{
            // Checking user exists or not
            const userExists = await user.findOne({"user_id" : decodeValue.user_id});

            if(!userExists){
                newUserData(decodeValue, req, res);
            }else{
                updateUserData(decodeValue, req, res);
            }
        }
    }catch(error){
        return res.status(505).json({message: error});
    }
})


// Creating new User
const newUserData = async (decodeValue, req, res) => {
    const newUser = new user({
        name: decodeValue.name,
        email: decodeValue.email,
        imageURL: decodeValue.picture,
        user_id: decodeValue.user_id,
        email_verified: decodeValue.email_verified,
        role: "member",
        subscription: false,
        auth_time: decodeValue.auth_time
    })

    try {
        const savedUser = await newUser.save();
        res.status(200).send({user: savedUser})
    }catch(error){
        res.status(400).send({success: false, message: error});
    }
}

// Updating the existing user
const updateUserData = async (decodeValue, req, res) => {
    const filter = {user_id: decodeValue.user_id};

    const options = {
        upsert: true,
        new: true
    };

    try {
        const result = await user.findOneAndUpdate(
            filter, 
            {auth_time : decodeValue.auth_time},
            options
        );
        res.status(200).send({user: result});
    } catch (error) {
        res.status(400).send({success: false, message: error});
    }
}

router.get("/getUsers", async (req, res) => {
    const options = {
        sort: {
            createdAt: 1,
        }
    };

    const data = await user.find().sort(options.sort);

    if (data) {
        res.status(200).send({success: true, data: data});
    }
    else {
        res.status(400).send({success: failed, msg: "No data found"})
    }
})

// Deleting a user
router.delete('/deleteUser/:id', async (req, res) => {
    const filter = { _id: req.params.id };
    const result = await user.deleteOne(filter);

    if (result.deletedCount === 1){
        return res.status(200).send({success: true, msg: "User deleted"});
    } else {
        return res.status(500).send({success: false, msg: "User not found"});
    }
})

module.exports = router;