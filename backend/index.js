const express = require("express");
const cors = require("cors")
const connectDb = require("./db/config");

const app = express();

connectDb();

app.use(express.json());
app.use(cors());


app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));




app.listen(5000);
