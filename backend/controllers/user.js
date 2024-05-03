const  User  = require("../models/userModel");

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

    await User.create({
      fullName,
      email,
      password,
    });

    return res.status(200).json({
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log("Error : ", error);
  }
};

module.exports = {
  Register,
};
