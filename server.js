const express = require(`express`);
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const dataBase = process.env.dataBase;

const router = require("./router/baberrouter");
app.use(express.json());

app.use(router);

const mongoose = require(`mongoose`);

mongoose
  .connect(dataBase)
  .then(() => {
    console.log("connection to db successful");
    app.listen(PORT, () => {
      console.log(`app is running on port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("unable to connect to data base" + error.message);
  });
