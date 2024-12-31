
module.exports = (sequelize, DataTypes) => {
    const Hotsites = sequelize.define("Hotsites",{
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
          },        
        urlSite:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            },
            primaryKey: true
        },

        image: {
            type: DataTypes.STRING
        },
        
        primaryColor:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        secondColor:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            }
        }
    })


    return Hotsites;



}