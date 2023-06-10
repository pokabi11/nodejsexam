require("dotenv").config();
const express = require("express");
const app = express();
const database = require("./src/database");
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running.");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//home
app.get("/",function(req,res){
    const User = require("./src/models/user");
    User.find({})
    .then(uf=>{
        res.render("home",{
            users: uf
        })
    })
    .catch(err=>{
        res.send(err);
    })
})
//CRUD users
const userRoutes = require("./src/routes/user.route");
app.use("/users",userRoutes);