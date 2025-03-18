const { userModel } = require("../models/user.model");
const bcrypt=require("bcrypt");
const signUp = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).send({error:err.Message})
            } else {
                // Store hash in your password DB.
                const userData = new userModel({ userName, email, password:hash});
                await userData.save();
                res.status(200).send({ Message: "Your Registration successfull",user:userData })
            }

        });

    } catch (e) {
        return res.status(400).send({ error: e.Message })
    }
}
module.exports = {
    signUp
}