const express = require('express');
const router = express.Router();

const Album = require('../models/album');

router.route('/')
      .get((req,res) =>{
         Album.find({},(err,album)=>{
          res.status(err?400:200).send(err || album);
         })
      })
      .post((req,res) =>{
         Album.create(req.body,(err,album)=>{
          res.status(err?400:200).send(err || album);
         })
      });

router.route('/:id')
       .get((req,res) =>{
  Album.findById(req.params.id, (err,album)=>{
    if(err||!album)
      return res.status(400).send(err||'Album not found')
    res.send(album);
     
   })
})
     .delete((req,res)=>{
       Album.findByIdAndRemove(req.params.id,(err,album)=>{
        if(err || !album) 
          res.status(400).send(err||'Album not found');
        else
          res.send(album.name+'is now deleted');
        
       })

     })


module.exports = router;