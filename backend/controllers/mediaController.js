const Media = require("../models/mediaModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.postData = catchAsync(async (req, res, next) => {
  const { img_url,caption } = req.body;
  const blog = await Media.findOne({ img_url });
  if (blog) {
    return next(new AppError("This image already store in database", 400));
  } else {
    const create =  Media.create(req.body);
    if (create) {
      res.status(200).json({
        status: "success",
        message: "Created Successfully",
      });
    } else {
      return next(new AppError("Not created", 400));
    }
  }
});

exports.auth= catchAsync(async(req,res,next)=>{
  
})

