const db = require('../models');

const multer  = require('multer');
const path    = require('path'); 
const Hotsite = db.Hotsites;


// Logic to create a new hotsite
const addSite = async (req,res)=>{
  let info = {
    id: req.body.id,
    urlSite: req.body.urlSite,
    image: req.file.originalname,
    primaryColor: req.body.primaryColor,
    secondColor: req.body.secondColor,
  }
  
  const site = await Hotsite.create(info)
  res.status(200).send(site) 
}


// Logic to update a new hotsite
const updateSite = async (req,res)=>{
  let updateValues = {};
  if (req.body.urlSite) updateValues.urlSite = req.body.urlSite
  if (req.body.primaryColor) updateValues.primaryColor = req.body.primaryColor
  if (req.body.secondColor) updateValues.secondColor = req.body.secondColor
  if (req.file) updateValues.image = req.file.originalname
  const site = await Hotsite.update( 
    updateValues, 
    {
      where: {id: req.params.hotsiteId}
    }
  )
  res.status(200).send(site) 
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, '../../farma4u-client-marcelo/public')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})


const upload = multer({
  storage: storage,
  limits: {fileSize: '10000000'},
  fileFilter: (req,file,cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType    = fileTypes.test(file.mimetype)
      const extName     = fileTypes.test(path.extname(file.originalname))  
      if (mimeType && extName){
        return cb(null, true)
      }
      cb('Forneça formatos válidos para o arquivo de imagem!')
  }
}).single('image');


const deleteSite = async(req,res) => {
  await Hotsite.destroy({
    where: {
      id : req.params.hotsiteId
    }
  })
}


module.exports = {
  addSite,
  updateSite,
  upload,
  deleteSite
}
  