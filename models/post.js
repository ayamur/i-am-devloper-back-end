'use strict'



const { Model } = require('sequelize')



module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Post.init({
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
    image: {
      type: DataTypes.STRING
    },
    caption: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Post',
  })
  return Post
}