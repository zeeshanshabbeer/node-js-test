const express = require("express");
const cookieParser = require("cookie-parser");
const cors=require("cors")
const Media = require("./routes/mediaRouter");
const globalErrorHandler = require("./controllers/errorController");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors())


// router for store image
app.use("/media", Media);

//global error handle
app.use(globalErrorHandler);

module.exports = app;
