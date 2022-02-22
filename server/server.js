const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const FRONTOFFICE_DOMAIN = process.env.FRONTOFFICE_DOMAIN;

//create express app
const app = express();
//socketio config
const server = require("http").createServer(app);

//apply middlewares
app.use(
  cors({
    credentials: true,
    origin: [FRONTOFFICE_DOMAIN],
  })
);
app.use(cookieParser());
app.use(bodyParser());
app.use(morgan("dev"));

//route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
//connection database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR=>", err));
//port
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
