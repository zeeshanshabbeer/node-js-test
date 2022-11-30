const jwt = require("jsonwebtoken");
const User = require("../models/mediaModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

//create the token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
};

//send the token
const createSendToken = (result, statusCode, req, res) => {
  const token = signToken(result.user_id);

  res.cookie("jwtToken", token, {
    expires: new Date(
      Date.now() + 3600000 //1 hour
    ),
    httpOnly: true,
  });
  res.status(statusCode).json({
    status: "success",
    token,
    result,
  });
};
//authentication
exports.protect = catchAsync(async (req, res, next) => {

  // 1) Getting token and check of it's there
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  } else if (req.cookies.jwtToken) {
    token = req.cookies.jwtToken;
  }

  if (!token) {
    return next(new AppError("You are not logged in! Please log in to get access.", 401));
  }

  // 2) Verification token
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if(decoded){
    console.log("Token verified")
    next();
  }else{
    return next(new AppError("Token expire", 401));
  }
});

exports.createToken = catchAsync(async (req, res, next) => {

  let myHeaders = new Headers();
myHeaders.append("Cookie", "csrftoken=em2tGNTcnV3ujmifQ1lNnN3BEJqDEZtz; ig_did=5C6C918F-8643-4BC2-A8A7-179F99280DCE; ig_nrcb=1; mid=Y4WjAwAEAAGL-BidQ6tay-f4r4X0");

let formdata = new FormData();
formdata.append("client_id", process.env.CLIENT_ID);
formdata.append("client_secret", process.env.CLIENT_SECRET);
formdata.append("grant_type", "authorization_code");
formdata.append("redirect_uri", "https://httpstat.us/200");
formdata.append("code", req.body.accessKey);

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.instagram.com/oauth/access_token", requestOptions)
  .then(response => response.text())
  .then(result => {
    result= JSON.parse(result)
    console.log(result)
    if(result.error_message){
      return next(new AppError(result.error_message, 400))
    }else{
      createSendToken(result,200, req, res)}
    })
  .catch(error => console.log(error));

});

