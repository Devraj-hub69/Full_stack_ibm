const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true,unique:true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const userModel = mongoose.model("user", UserSchema)
module.exports = {
    userModel
}