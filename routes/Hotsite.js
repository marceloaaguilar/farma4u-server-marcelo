const express = require('express');
const router = express.Router();
const {Hotsites} = require("../models");

const hotsiteController = require('../controllers/hotsiteController.js');
 
router.get('/:nomeSite', function(req,res){
    Hotsites.findOne({where:{urlSite: req.params.nomeSite }}).then((HotsitesResult)=>{
        if(HotsitesResult != null){
            res.send(HotsitesResult);
        }
        else{
            res.status(404).send("Not Found");
        }
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/find/:id', function(req,res){
    Hotsites.findOne({where:{id: req.params.id }}).then((HotsitesResult)=>{
        if(HotsitesResult != null){
            res.send(HotsitesResult);
        }
        else{
            res.status(404).send("Not Found");
        }
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/:nomeSite/login', function(req,res){
    Hotsites.findAll({where:{urlSite: req.params.nomeSite }}).then((HotsitesResult)=>{
        if(HotsitesResult){
            res.send(HotsitesResult);
        }
        else{
            res.status(404).send("Not Found");
        }
    }).catch((err)=>{
        console.log(err)
    })
})


router.post('/addSite', hotsiteController.upload, hotsiteController.addSite);

router.put('/updateSite/:hotsiteId', hotsiteController.upload, hotsiteController.updateSite);

router.patch('/delete/:hotsiteId', hotsiteController.deleteSite);



module.exports = router