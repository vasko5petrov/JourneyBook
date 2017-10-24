const express = require('express');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const Journey = require('../models/journey');

// Set Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({
  storage: storage,
  limits: {fileSize: 100000000},
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('imageFile');

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype.toLowerCase());

  if(mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

router.post('/upload', function (req, res) {
    upload(req, res, (err) => {
      if(err) {
        res.json({
          success: false,
          message: err
        });
      } else {
        if(req.file == undefined) {
          res.json({
            success: false,
            message: 'Error: No File Selected!'
          });
        } else {
          res.json({
            success: true,
            message: 'Success: File Uploaded!',
            file: req.file.filename
          });
        }
      }
    });
})

router.delete('/delete/:path', function(req, res) {
  fs.unlink('./public/uploads/' + req.params.path, function(err) {
    if(err) {
      res.json({
        success: false,
        message: err
      });
    }
    res.json({
      success: true,
      message: "Image has been deleted!"
    });
  });
});

module.exports = router;
