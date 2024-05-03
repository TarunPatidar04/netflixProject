const express = require("express");
require("dotenv").config({
    path:".env"
});
const app = express();

app.get("/", (req, res) => {
  console.log("Express : ", express);
  res.send("Hello this is Netflix Backend server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Started at port ${process.env.PORT}`);
});
