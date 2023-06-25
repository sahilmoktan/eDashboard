const asyncHandler = require("express-async-handler");
const Users = require("../model/UsersModel");
const jwt = require("jsonwebtoken");

// Register a user
const registerUser = asyncHandler(async (req, res) => {
  // res.send("register app is working hai...!");

  const user = await Users.create(req.body);
  res.json({ message: "User Register successfully" });
  console.log(user);
});

//@desc Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("All fields are Mandatory");
  } else {
    const user = await Users.findOne({ email }).select("-password");
    if (user) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken, user })
      // .send(user)
    } else {
      res.send("User not found");
    }
  }
});

module.exports = {
  registerUser,
  loginUser,
};
