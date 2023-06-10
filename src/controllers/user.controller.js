const User = require("./../models/user");
const bcrypt = require("bcryptjs");
const fs = require("fs");



exports.get = async (req,res)=>{
    try {
        const uf = await User.find({});
        res.render("user/list",{
            products: uf
        })
    } catch (error) {
        res.send(error);
    }
};



exports.create = (req,res)=>{
    res.render("user/form");
};



exports.save = async (req,res)=>{
    const data = req.body;
    const user = new User(data);
    try {
        await user.save();
        res.redirect("/users/");
    } catch (error) {
        res.send(error);
    }

    // let existuser = await User.findOne({username:req.body.username});
    // if(existuser) return res.status(422).send("username is exist..");

    // hash password
    // const salt = await bcrypt.genSalt(10);
    // const hashPwd = await bcrypt.hash(req.body.password,salt);
    // try {
    //     // save to db
    //     const user = new User({
    //         firstname: req.body.firstname,
    //         lastname: req.body.lastname,
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: hashPwd
    //     })
    //     await user.save();
    //     res.send("DONE");
    // } catch (error) {
    //     res.send(error);
    // }
};