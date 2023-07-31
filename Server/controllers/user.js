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

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "Email doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong Password" });
    }

    const tokenPayload = { email: existingUser.email, id: existingUser._id };
    const tokenSecret = "test";
    const tokenOptions = { expiresIn: "1h" };
    const token = jwt.sign(tokenPayload, tokenSecret, tokenOptions);

    res.status(200).json({
      message: "SuccessFully Login",
      success: true,
      user: existingUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during registration" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.find();

    res.status(200).json({
      message: "Successfully Get All User",
      success: true,
      user: user,
    });
  } catch (error) {}
};

module.exports = {
  signup: signup,
  signin: signin,
  getUser: getUser,
};
