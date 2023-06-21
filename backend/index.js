const express = require("express");
const cors = require("cors")
const connectDb = require("./db/config");
const Users = require("./model/Users");

const app = express();

connectDb();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  // res.send("register app is working hai...!");

  const user =  await Users.create(req.body);
  res.json({ message:  "User Register successfully" })
  console.log(user)
});

app.listen(5000);
