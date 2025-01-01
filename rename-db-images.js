const db = require("./models");
const Hotsite = db.Hotsites;
updateImageNames();

async function updateImageNames() {

  try {
    const hotsites = await Hotsite.findAll({
      where: {
        image: {
          [db.Sequelize.Op.like]: '% %'
        }
      }
    })

    for (let hotsite of hotsites) {

      const newImageName = hotsite.image.replace(/\s+/g, '-');
      await Hotsite.update(
        {image: newImageName},
        {where: {id: hotsite.id}}
      )
    }
  }

  catch (err){
    console.error(err);
  }

}