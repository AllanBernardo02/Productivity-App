const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "Email Already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const tokenPayload = { email: savedUser.email, id: savedUser._id };
    const tokenSecret = "test";
    const tokenOptions = { expiresIn: "1h" };
    const token = jwt.sign(tokenPayload, tokenSecret, tokenOptions); // 3 parms - payload, secretOrPrivateKey, [options, callback]

    res.status(201).json({
      message: "User created Succesfully",
      success: true,
      user: savedUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during registration" });
  }
};

module.exports = {
  signup: signup,
};
