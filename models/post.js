'use strict'
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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