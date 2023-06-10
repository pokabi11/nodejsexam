const mongoose = require("mongoose");
const user = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        maxLength:48,
    },
    lastname:{
        type:String,
        required:true,
        maxLength:48,
    },

    mobile:{
        type:String,
        required:true,
        maxLength:20,
        unique: [true, "phone number existed"],
        validate: {
            validator: (value) => {
                const regExp = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
                return value.match(regExp);
            },
            message: (text) => `${text.value} không phải số điện thoại`
        }
    },
    username:{
        type:String,
        required:true,
        minLength:6,
        maxLength:20,
        unique: [true, "existed"]
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:255
    },
});
module.exports = mongoose.model("User",user);