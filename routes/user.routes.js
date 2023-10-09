const express = require("express");
const {UserModel} = require('../model/user.model');
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.post("/register", async(req, res) =>{
    const {email,pass} = req.body;
    try{
        bcrypt.hash(pass,5, async (err, hash) => {
            const user = new UserModel({email, pass:hash});
            await user.save();
            res.status(200).send({"message":"Registration successfull"})
        })
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

userRouter.post("/login", async (req, res) => {
    const {email, pass} = req.body;
    try{
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(pass, user.pass, (err, result) => {
                if(result){
                    res.status(200).send({"message":"Login successfull", "token":jwt.sign({"userID":user._id}, "skilltank")})
                }else{
                    res.status(400).send({"message":"Wrong password"})
                }
            })
        }else{
            res.status(400).send({"message":"Enter correct E-mail"});
        }
    }catch(err){
        res.status(400).send({"message":err.message});
    }
})

module.exports = {
    userRouter
}