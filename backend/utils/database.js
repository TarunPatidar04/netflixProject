const { mongoose } = require("mongoose");
const dataBaseConnection = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("mongodb connected Successfully");
    })
    .catch((error) => {
      console.log("mongodb error : ", error);
    });
};

module.exports = {
  dataBaseConnection,
};
