const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js');
const Order = require('./Order.js');

class Dealer extends Model{
    static associate(models) {
        Dealer.hasMany(Order, {
          foreignKey: 'dealerID',
          as: 'order'
        });
      }
}
Dealer.init(
    {
        dealerID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dealerFName:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerMName:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerLName:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerBDate:{
            type: DataTypes.STRING,
            allowNull:false
        }, 
        dealerGender:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerCuAddress:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerPeAddress:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerContactNo:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerHasBusiness:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
        dealerBusinessName:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerBusinessPhone:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerBusinessAddress:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerBusinessTIN:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dealerCreditLimit:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
        dealerSubmissionDate:{
            type:DataTypes.STRING,
            allowNull:false
        },
        attachments:{
            type:DataTypes.STRING,
            allowNull:false
        },
    },
    {
        sequelize,
        modelName: 'Dealer', // The name of the model, which will be used as the table name
        timestamps: false,
      }
);
module.exports= Dealer;