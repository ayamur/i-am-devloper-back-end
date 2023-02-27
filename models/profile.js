'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'SET NULL' })

      Profile.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' })


      Profile.hasMany(models.Post, {
        as: 'postCreate',
        foreignKey: 'profileId'
      })
    }
  }

  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        onDelete: "CASCADE"
      },
    },
  },
    {
      sequelize,
      modelName: 'Profile',
    })
  return Profile
}
