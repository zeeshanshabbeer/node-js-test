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
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user);

  res.cookie("jwtToken", token, {
    expires: new Date(
      Date.now() + 3600000 //1 hour
    ),
    httpOnly: true,
  });
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
//authentication
exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
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

exports.generateToken=catchAsync(async(req,res,next)=>{
  const {user_id}=req.body
  createSendToken(user_id, statusCode, req, res)
})