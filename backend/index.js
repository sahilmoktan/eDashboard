const express = require("express");
const cors = require("cors")
const connectDb = require("./db/config");
const Users = require("./model/UsersModel");

const app = express();

connectDb();

app.use(express.json());
app.use(cors());


app.use("/api/users", require("./routes/userRoutes"));

// app.post("/register", async (req, res) => {
//   // res.send("register app is working hai...!");

//   const user =  await Users.create(req.body);
//   res.json({ message:  "User Register successfully" })
//   console.log(user)
// });

// app.post("/login", async (req, res) => {
  
// });



app.listen(5000);
