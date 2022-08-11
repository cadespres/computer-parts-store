const express = require("express");
const mongoose = require("mongoose");
const routes = require("./controllers/routes");
require('dotenv').config()

let mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl, {useNewUrlParser: true})
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
})
