const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { dataBaseConnection } = require("./utils/database");
require("dotenv").config({
  path: ".env",
});
const app = express();
dataBaseConnection(process.env.MONGO_URI);

//route
const userRoute = require("./routes/userRoute");

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

//API
// http://localhost:8080/api/v1/user/register
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("hello this is netflix backend server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Started at port ${process.env.PORT}`);
});
