const express = require('express');
const router = express.Router();

const Image = require('../models/image');

router.route('/')
      .get((req,res) =>{
         Image.find({},(err,images)=>{
          res.status(err?400:200).send(err || images);
         }).populate('albumkey')
      })
      .post((req,res) =>{
         Image.create(req.body,(err,image)=>{
          res.status(err?400:200).send(err || image);
         })
      });


router.route('/:id')
       .get((req,res) =>{
  Image.findById(req.params.id, (err,image)=>{
    if(err||!image)
      return res.status(400).send(err||'Image not found')
    res.send(image);
     
   }).populate('albumkey')
})
     .delete((req,res)=>{
       Image.findByIdAndRemove(req.params.id,(err,image)=>{
        if(err || !image) 
          res.status(400).send(err||'Image not found');
        else
          res.send(image.name+'is now deleted');
        
       })

     })




router.put('/:imageId/addAlbum/:albumId',(req,res)=>{
  Image.findById(req.params.imageId, (err,image)=>{
    if(err ||!image) {
      return res.status(400).send(err || 'Image not found');
    }


    let albumId = req.params.albumId;

    image.albumkey = albumId;

    image.save((err, savedImage)=>{
      res.status(err?400:200).send(err || savedImage);
    });
  
  })

})



module.exports = router;



