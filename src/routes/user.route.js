const express = require("express");
const router = express.Router();
const controller = require("./../controllers/user.controller");
router.get("/",controller.get);
router.get("/create",controller.create);
router.post("/create",controller.save);

router.get("/",(req,res)=>{
    User.find({})
        .then(uf=>{
            res.render("user/list",{
                users: uf
            })
        })
        .catch(err=>{
            res.send(err);      
        })
});
router.get("/create",(req,res)=>{
    res.render("user/form");
});
router.post("/create",(req,res)=>{
    const data = req.body;
    const user = new User(data);
    user.save()
    .then(uf=>{
        res.redirect("/users/");
    }).catch(err=>{
        res.send(err);
    })
});
module.exports = router;