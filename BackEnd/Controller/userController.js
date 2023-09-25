const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

exports.getAllUser = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            "message": "all user data",
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            "message": "error in get all user",
            error
        })
    }
};

exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            console.log("all fields are empty");
            return res.status(401).send({
                "message": "All fields are mandatory to filled",
            });
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).send({
                "message": "user already exist"
            });
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const user = new userModel({ username, email, password: hashPassword });
        await user.save();
        return res.status(201).send({
            "message": "new user created",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "error at registration",
            success: false,
            error
        })
    }
};

exports.loginUser =async (req,res) => {
  try {
const {email,password} = req.body;
const user = await userModel.findOne({email});
if(!user) {
    return res.status(401).send({
        "message":'email is not registered'
    })
}
const isMatch  = await bcrypt.compare(password, user.password);
if(!isMatch)  
{
  return res.status(401).send({
    "message":"password or username is not matched"
  })
}
return res.status(200).send({
    "messsage":"login successfully",
    user
})
  }catch(error) {
    console.log(error);
    return res.status(500).send({
        "message":"error in login filled while we are login",
        error
    })
  }
}; 