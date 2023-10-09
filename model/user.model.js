const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{type:String, unique:true, required:true},
    pass:{type:String, required:true}
},{
    versionKey:false
})

const UserModel = mongoose.model("user", userSchema);

module.exports={
    UserModel
}