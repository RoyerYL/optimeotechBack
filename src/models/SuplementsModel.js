const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Suplement', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue:""
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sales:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        wigth:{
            type:DataTypes.INTEGER,
            defaultValue:1,
            allowNull:false
        }
        }, { timestamps: false }
    );
}