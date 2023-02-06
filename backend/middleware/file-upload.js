const multer = require('multer');
const dotenv = require('dotenv');

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "camp-mern",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

const fileUpload = multer({ storage: storage });

app.post("/api/upload", fileUpload.single("image "), function (req, res) {
  try {
    console.log("in upload backend");
    console.log(req.file);
    const filePath = req.file.path;
    const imageId = req.file.filename;
    return res.status(200).json({path : filePath, imageid: imageId});
  } catch (error) {
    console.error(error);
  }
});


module.exports = fileUpload;
