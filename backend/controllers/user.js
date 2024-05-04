const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Email and Password",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email and Password",
        success: false,
      });
    }
    const tokenData = {
      id: user._id,
    };
    const token = jwt.sign(tokenData, "hsiwbdajbsjbd", { expiresIn: "1d" });
    // console.log("Token : ", token);
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome Back ${user.fullName}`,
        success: true,
      });
  } catch (error) {
    console.log("Login Error : ", error);
  }
};

const Logout = async (req, res) => {
  return res
    .status(201)
    .cookie("token", " ", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User Logged Out Successfully",
      success: true,
    });
};

const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "This Email is already Use",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 16); //(Password,salt Value)
    // console.log(hashedPassword);
    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Registration Error : ", error);
  }
};

module.exports = {
  Register,
  Login,
  Logout,
};
