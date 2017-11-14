const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const passport = require('passport');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const path = require('path');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');

let db = mongoose.connection;
let gfs;
let storage;
let upload;

// Check connection
db.once('open', () => {
	Grid.mongo = mongoose.mongo;
	gfs = Grid(db.db);
	/** Setting up storage using multer-gridfs-storage */
	storage = GridFsStorage({
	    gfs : gfs,
      filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      },
	    /** With gridfs we can store aditional meta-data along with the file */
	    metadata: function(req, file, cb) {
	        cb(null, { originalname: file.originalname });
	    }
	});

	upload = multer({ //multer settings for single upload
	    storage: storage,
      limits: {fileSize: 5000000},
      fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
      }
	}).single('imageFile');
});

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

/** API path that will upload the files */
router.post('/upload', passport.authenticate('jwt', {session:false}), function(req, res) {
    upload(req,res,function(err){
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
});

router.get('/:filename', function(req, res){

    /** First check if file exists */
    gfs.findOne({ filename: req.params.filename}, function (err, file) {
      if(!file) {
        res.json({success: false, message: 'Image was not found'});
        return;
      }
      let readstream = gfs.createReadStream({
        filename: file.filename
      });
      res.set('Content-Type', file.contentType);
      return readstream.pipe(res);
    });
    // gfs.findOne({filename: req.params.filename}, (err, files) => {
    //     if(!files || files.length === 0){
    //         return res.status(404).json({
    //             responseCode: 1,
    //             responseMessage: "error"
    //         });
    //     }
    //     /** create read stream */
    //     var readstream = gfs.createReadStream({
    //         filename: files[0].filename
    //     });
    //     /** set the proper content type */
    //     res.set('Content-Type', files[0].contentType)
    //     /** return response */
    //     return readstream.pipe(res);
    // });
});

router.delete('/delete/:filename', passport.authenticate('jwt', {session:false}), (req, res) => {

  /** First check if file exists */
  gfs.findOne({filename: req.params.filename}, (err, result) => {
    gfs.remove({_id: result._id}, (err) => {
      if(err) {
        res.json({
          success: false,
          message: err
        });
        return;
      }
      res.json({
        success: true,
        message: "Image has been deleted!"
      });
    });
  });
});

// const GoogleImages = require('google-images');
//
// const client = new GoogleImages('002557618436623976352:2kzztbgx-ay', 'AIzaSyDrbJivZi_awI8CG3Hf772cl2UByqDHhas');
//
// client.search('The Aifel Tower')
//     .then(images => {
//         /*
//         [{
//             "url": "http://steveangello.com/boss.jpg",
//             "type": "image/jpeg",
//             "width": 1024,
//             "height": 768,
//             "size": 102451,
//             "thumbnail": {
//                 "url": "http://steveangello.com/thumbnail.jpg",
//                 "width": 512,
//                 "height": 512
//             }
//         }]
//          */
//          console.log(images[0]);
//     });
// //
// // // paginate results
// // client.search('Steve Angello', {page: 2});
// //
// // // search for certain size
// // client.search('Steve Angello', {size: 'large'});

// const Journey = require('../models/journey');
//
// // Set Storage Engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });
//
// var upload = multer({
//   storage: storage,
//   limits: {fileSize: 100000000},
//   fileFilter: function(req, file, cb) {
//     checkFileType(file, cb);
//   }
// }).single('imageFile');
//
// // Check File Type
// function checkFileType(file, cb) {
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype.toLowerCase());
//
//   if(mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }
//
// router.post('/upload', passport.authenticate('jwt', {session:false}), function (req, res) {
//     upload(req, res, (err) => {
//       if(err) {
//         res.json({
//           success: false,
//           message: err
//         });
//       } else {
//         if(req.file == undefined) {
//           res.json({
//             success: false,
//             message: 'Error: No File Selected!'
//           });
//         } else {
//           res.json({
//             success: true,
//             message: 'Success: File Uploaded!',
//             file: req.file.filename
//           });
//         }
//       }
//     });
// })
//
// router.delete('/delete/:path', passport.authenticate('jwt', {session:false}), function(req, res) {
//   fs.unlink('./public/uploads/' + req.params.path, function(err) {
//     if(err) {
//       res.json({
//         success: false,
//         message: err
//       });
//     }
//     res.json({
//       success: true,
//       message: "Image has been deleted!"
//     });
//   });
// });

module.exports = router;
